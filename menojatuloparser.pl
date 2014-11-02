#!/usr/bin/perl -w

use warnings;
use strict;


my $file = 'E_VI_EUV2014.csv';

open(FILE, $file) or die "cannot";
my @filedata = <FILE>;

close(FILE);

#print "@filedata";

my $nlines = scalar(@filedata);
my $j;

for($j = 1; $j < 2; $j++){# $line(@filedata){
#print $line . "\n";
 my @labels = split(';', $filedata[0]);
 my @data = split(';', $filedata[$j]);


 my $ln = scalar(@data);
 my $i;

# moneyprinter(\@labels, \@data, 9, 20, 2, 'from');
# moneyprinter(\@labels, \@data, 22, 40, 2, 'to');
 gsankeyprinter(\@labels, \@data, 10, 40, 2);


}

sub moneyprinter{
 my $labels = shift;
 my $data = shift;
 my $start = shift;
 my $end = shift;
 my $candidate = shift;
 my $direction = shift;
 my $i;
 for($i = $start; $i < $end; $i++){
  if(length(@{$data}[$i]) < 4){
   next;
  }
  if($direction eq 'from'){
   print "[" . @{$data}[$candidate] . ", " . @{$labels}[$i] . ", " . @{$data}[$i] . " ]," . "\n";
  }
  else{
   print "[" . @{$labels}[$i] . ", " . @{$data}[$candidate] . ", " . @{$data}[$i] . " ]," . "\n";
  }
 }
 print "\n\n";
}

sub gsankeyprinter{
 my $labels = shift;
 my $data = shift;
 my $start = shift;
 my $end = shift;
 my $candidate = shift;

 my @labs = ();
 my $counter = 0;
 my $out = 0;
 my $outcount = 1;
 my $i;
 my @incomelabels = ();
 my @incomes = ();
 my @expenditurelabels = ();
 my @expenditures = ();
 for($i = $start; $i < $end; $i++){
  if(length(@{$data}[$i]) < 4){
   next;
  }
  if ($i >= $start && $i < 19){
   push (@incomelabels, @{$labels}[$i]);
   push (@incomes, @{$data}[$i]);
   $counter++;
  }
  if($i > 20 && $i < $end){
   push (@expenditurelabels, @{$labels}[$i]);
   push (@expenditures, @{$data}[$i]);
#   $counter++;
 }
}
print $out . "\n";


 my $ncount = 0;
 my $labcount = 0;
 my $inc = 0;
 my $exp = 0;
 for($i = $start; $i < $end; $i++){
  if(length(@{$data}[$i]) < 4){
   next;
  }
  if ($counter < scalar(@incomes)){
   print $incomes[$inc] . " " . $ncount . " " . $counter . " " . @{$data}[$i] . "\n";
   $ncount++;
   $inc++;
   next;
  }
  if($exp < scalar(@expenditures)){
   print $expenditures[$exp] . " " . $counter . " " . $ncount . " " . @{$data}[$i] . "\n";
   $ncount++;
   $exp++;
  }
 } # for i

}

=pod
=cut


#print("hello" . "\n");


