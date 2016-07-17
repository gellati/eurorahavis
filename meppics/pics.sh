#!/bin/bash

pics=("http://www.europarl.europa.eu/mepphoto/40599.jpg"
"http://www.europarl.europa.eu/mepphoto/112611.jpg" 
"http://www.europarl.europa.eu/mepphoto/124726.jpg"
"http://www.europarl.europa.eu/mepphoto/124727.jpg"
"http://www.europarl.europa.eu/mepphoto/107385.jpg"
"http://www.europarl.europa.eu/mepphoto/28314.jpg"
"http://www.europarl.europa.eu/mepphoto/2119.jpg"
"http://www.europarl.europa.eu/mepphoto/2128.jpg"
"http://www.europarl.europa.eu/mepphoto/114268.jpg"
"http://www.europarl.europa.eu/mepphoto/96684.jpg"
"http://www.europarl.europa.eu/mepphoto/124735.jpg"
"http://www.europarl.europa.eu/mepphoto/124636.jpg"
"http://www.europarl.europa.eu/mepphoto/2054.jpg")

wget "http://www.europarl.europa.eu/mepphoto/40599.jpg"
wget "http://www.europarl.europa.eu/mepphoto/112611.jpg" 
wget "http://www.europarl.europa.eu/mepphoto/124726.jpg"
wget "http://www.europarl.europa.eu/mepphoto/124727.jpg"
wget "http://www.europarl.europa.eu/mepphoto/107385.jpg"
wget "http://www.europarl.europa.eu/mepphoto/28314.jpg"
wget "http://www.europarl.europa.eu/mepphoto/2119.jpg"
wget "http://www.europarl.europa.eu/mepphoto/2128.jpg"
wget "http://www.europarl.europa.eu/mepphoto/114268.jpg"
wget "http://www.europarl.europa.eu/mepphoto/96684.jpg"
wget "http://www.europarl.europa.eu/mepphoto/124735.jpg"
wget "http://www.europarl.europa.eu/mepphoto/124636.jpg"
wget "http://www.europarl.europa.eu/mepphoto/2054.jpg"


for i in $pics
do
 echo $i
done
