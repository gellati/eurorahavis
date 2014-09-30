
function Sankey(x0,y0,height,losses){
initialcolor= Raphael.getColor();
var start=x0+200;
var level=y0+height;

var heightunit=height/100;
var remaining=100*heightunit;

    function drawloss(start,level,loss){

    var thecolor=Raphael.getColor();
    paper.path("M"+(start-100)+","+(level-loss)+"L"+start+","+(level-loss)).attr({stroke: thecolor});
    paper.path("M"+(start-100)+","+(level)+"L"+start+","+(level)).attr({stroke: thecolor});
    paper.path("M "+start+","+level+" Q"+(start+100)+","+level+" "+(start+100)+","+(level+100)).attr({stroke: thecolor});
    paper.path("M "+start+","+(level-loss)+" Q"+(start+100+loss)+","+(level-loss)+" "+(start+100+loss)+","+(level+100)).attr({stroke: thecolor});
    paper.path("M "+(start+100)+","+(level+100)+" L "+(start-10+100)+","+(level+100)+" L "+(start+(loss/2)+100)+","+(level+110)+" L "+(start+(loss)+10+100)+","+(level+100)+" L "+(start+(loss)+100)+", "+(level+100)).attr({stroke: thecolor});
}

function drawremaining(start,level,loss){
    paper.path("M 100,"+(y0)+"L"+(start+100)+","+(y0)).attr({stroke: initialcolor});
    paper.path("M"+(start-100)+","+(level)+"L"+(start+100)+","+(level)).attr({stroke: initialcolor});
    paper.path("M "+(start+100)+" "+y0+" L "+(start+100)+" "+(y0-10)+" L "+(start+110)+" "+(y0+(loss/2))+" L "+(start+100)+" "+(level+10)+" L "+(start+100)+" "+(level)).attr({stroke: initialcolor});
    }

function drawstart(x0, y0, width, height){
    paper.path("M "+x0+","+y0+"L"+(x0+width)+","+y0+"").attr({stroke: initialcolor});
    paper.path("M "+x0+","+(y0+height)+"L"+(x0+width)+","+(y0+height)+"").attr({stroke: initialcolor});
    paper.path("M "+x0+","+y0+"L"+x0+","+(y0+height)+"").attr({stroke: initialcolor});
     }

  drawstart(x0,y0,100,height);
  for (var i in losses){
    drawloss(start,level,losses[i]*heightunit);
    remaining-=losses[i]*heightunit;
    level-=losses[i]*heightunit;
    start+=100;
 }
drawremaining(start, level, remaining);
 }

