#!/usr/bin/perl -w

use warnings;
use strict;

# program for quick parsing of the taffy database


my $file = 'data.js';

open(FILE, $file) or die "cannot";
my @filedata = <FILE>;

close(FILE);

#print "@filedata";

my $nlines = scalar(@filedata);
my ($i,$j);

my %data = ();

for($i = 0; $i < $nlines; $i++){
my $line = $filedata[$i];

if ($line =~ /^{/){
$line =~ s/{//;
$line =~ s/}//;
chomp $line;
#print $line;
my @pairs = split(',', $line);
#my $id = 
for($j = 0; $j < scalar(@pairs); $j++){

 my @elements = split(':', $pairs[$j]);
 if($elements[0] =~ /^$/){
  next;
 }
 if($elements[1] =~ /^$/){
  next;
 }
 $data{$elements[0]} = $elements[1];
# print $elements[0];
}


}

}

for my $key (%data) {
print $data{$key} . "\n";
}

