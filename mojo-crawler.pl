#!/usr/bin/env perl
#use 5.010;
use open qw(:locale);
use strict;
use utf8;
use warnings qw(all);
use feature qw(say state);
use Data::Dumper;

use Mojo::UserAgent;
use Mojo::URL;
use Selenium::Remote::Driver;

# FIFO queue
my @urls = map { Mojo::URL->new($_) } qw(
http://www.vaalirahoitus.fi/fi/index/vaalirahailmoituksia/ilmoituslistaus/KV2012/853.html
);

#    http://google.com
#    http://sysd.org/page/1/
#    http://sysd.org/page/2/
#    http://sysd.org/page/3/
#    http://sysd.org/page/4/
#    http://sysd.org/page/5/
#    http://sysd.org/page/6/


# Limit parallel connections to 4
my $max_conn = 4;

# User agent following up to 5 redirects
my $ua = Mojo::UserAgent
    ->new(max_redirects => 5)
    ->detect_proxy;

# Keep track of active connections
my $active = 0;

Mojo::IOLoop->recurring(
    0 => sub {
        for ($active + 1 .. $max_conn) {

            # Dequeue or halt if there are no active crawlers anymore
            return ($active or Mojo::IOLoop->stop)
                unless my $url = shift @urls;

            # Fetch non-blocking just by adding
            # a callback and marking as active
            ++$active;
            $ua->get($url => \&get_callback);
        }
    }
);

# Start event loop if necessary
Mojo::IOLoop->start unless Mojo::IOLoop->is_running;


my $a = _fetch_page('http://www.vaalirahoitus.fi/fi/index/vaalirahailmoituksia/ilmoituslistaus/KV2012/853.html');

print $a;







sub get_callback {
    my (undef, $tx) = @_;

    # Deactivate
    --$active;

    # Parse only OK HTML responses
    return
        if not $tx->res->is_status_class(200)
        or $tx->res->headers->content_type !~ m{^text/html\b}ix;

    # Request URL
    my $url = $tx->req->url;

    say $url;
    parse_html($url, $tx);

    return;
}

sub parse_html {
    my ($url, $tx) = @_;

#    say $tx->res->dom->at('html title')->text;
    my @urls = ();

    # Extract and enqueue URLs
    for my $e ($tx->res->dom('a[href]')->each) {

#        say $e;
        # Validate href attribute
        my $link = Mojo::URL->new($e->{href});
        next if 'Mojo::URL' ne ref $link;

        # "normalize" link
        $link = $link->to_abs($tx->req->url)->fragment(undef);
        next unless grep { $link->protocol eq $_ } qw(http https);

        # Don't go deeper than /a/b/c
        next if @{$link->path->parts} > 4;

        # Access every link only once
        state $uniq = {};
        ++$uniq->{$url->to_string};
        next if ++$uniq->{$link->to_string} > 1;

        # Don't visit other hosts
        next if $link->host ne $url->host;

        push @urls, $link;
        say " -> $link";
    }

    print Dumper(@urls);
    print "test" . "\n";
    print "@urls";
    say '';

    return;
}

sub _fetch_page {
        my $url = shift;
        my $driver = new Selenium::Remote::Driver('remote_server_addr' => 'localhost',
                                             'port' => '9134',
                                             'browser_name'       => 'chrome',
                                             'platform'           => 'VISTA');
        $driver->get($url);
        my $dom = Mojo::DOM->new( $driver->get_page_source() );
        $driver->quit();
        return $dom;
}





