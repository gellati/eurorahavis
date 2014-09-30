
var councilmembers = TAFFY();

councilmembers.insert([{id:1,name:"Petteri Orpo",party:"KOK"},
{id:2,name:"Ilkka Kanerva",party:"KOK"},
{id:3,name:"Pentti Huovinen",party:"KOK"},
{id:4,name:"Saara-Sofia Sutela",party:"KOK"},
{id:5,name:"Minna Arve",party:"KOK"},
{id:6,name:"Maija Perho",party:"KOK"},
{id:7,name:"Kaija Hartiala",party:"KOK"},
{id:8,name:"Mohammad Azizi",party:"KOK"},
{id:9,name:"Lauri Kattelus",party:"KOK"},
{id:10,name:"Pauli Kossila",party:"KOK"},
{id:11,name:"Lasse Lindholm",party:"KOK"},
{id:12,name:"Niko Aaltonen",party:"KOK"},
{id:13,name:"Satu Alanen",party:"KOK"},
{id:14,name:"Marjukka Karttunen",party:"KOK"},
{id:15,name:"Tuomas Viljamaa",party:"KOK"},
{id:16,name:"Ulla-Maija Vierimaa",party:"KOK"},
{id:17,name:"Anne Aholainen",party:"KOK"},
{id:18,name:"Olli A. Manni",party:"KOK"},
{id:19,name:"Aila Harjanne",party:"KOK"},
{id:20,name:"Aimo Massinen",party:"SDP"},
{id:21,name:"Päivi Pietari",party:"SDP"},
{id:22,name:"Mika Maaskola",party:"SDP"},
{id:23,name:"Jarmo Rosenlöf",party:"SDP"},
{id:24,name:"Ilkka Kantola",party:"SDP"},
{id:25,name:"Seppo Lehtinen",party:"SDP"},
{id:26,name:"Piia Elo",party:"SDP"},
{id:27,name:"Raili Engdahl",party:"SDP"},
{id:28,name:"Toni Eklund",party:"SDP"},
{id:29,name:"Eeva-Johanna Eloranta",party:"SDP"},
{id:30,name:"Mari-Elina Koivusalo",party:"SDP"},
{id:31,name:"Kjell Lundahl",party:"SDP"},
{id:32,name:"Jorma Hellstén",party:"SDP"},
{id:33,name:"Jukka Mikkola",party:"SDP"},
{id:34,name:"Janina Andersson",party:"VIHR"},
{id:35,name:"Elina Rantanen",party:"VIHR"},
{id:36,name:"Katri Sarlund",party:"VIHR"},
{id:37,name:"Saara Ilvessalo",party:"VIHR"},
{id:38,name:"Roda Hassan",party:"VIHR"},
{id:39,name:"Mikko Laaksonen",party:"VIHR"},
{id:40,name:"Niina Ratilainen",party:"VIHR"},
{id:41,name:"Tuija Ollikkala",party:"VIHR"},
{id:42,name:"Mikaela Sundqvist",party:"VIHR"},
{id:43,name:"Jukka Vornanen",party:"VIHR"},
{id:44,name:"Li Andersson", party:"VAS"},
{id:45,name:"Pirjo Rinne",party: "VAS"},
{id:46,name:"Johannes Yrttiaho",party:"VAS"},
{id:47,name:"Mirka Muukkonen",party:"VAS"},
{id:48,name:"Jukka Kärkkäinen",party:"VAS"},
{id:49,name:"Pasi Heikkilä",party:"VAS"},
{id:50,name:"Sauli Saarinen",party:"VAS"},
{id:51,name:"Alpo Lähteenmäki",party:"VAS"},
{id:52,name:"Elina Sandelin",party: "VAS"},		
{id:53,name:"Timo Laihinen",party:"PS"},
{id:54,name:"Mikael Miikkola",party:"PS"},
{id:55,name:"Ville Tavio",party:"PS"},
{id:56,name:"Jouko Laakso",party:"PS"},
{id:57,name:"Pirjo Niinivirta",party:"PS"},
{id:58,name:"Pirjo Lampi",party:"PS"},
{id:59,name:"Annika Saarikko",party:"KESK"},
{id:60,name:"Sakari Hihnala",party:"KESK"},
{id:61,name:"Ali Alas",party:"KESK"},
{id:62,name:"Jarmo Laivoranta",party:"KESK"},
{id:63,name:"Stefan Wallin",party:"RKP"},
{id:64,name:"Christel von Frenkell-Ramberg",party:"RKP"},
{id:65,name:"Terhi Vörlund-Wallenius",party:"RKP"},
{id:66,name:"Ville Auvinen",party:"KD"},
{id:67,name:"Olavi Mäenpää",party:"SVR"}]);


var members = TAFFY();
members.insert([{id: 1, name:"Sirpa Pietikäinen", party:"KOK"},
{id: 2, name:"Petri Sarvamaa", party:"KOK"},
{id: 3, name:"Alexander Stubb", party:"KOK"},
{id: 4, name:"Henna Virkkunen", party:"KOK"},
{id: 5, name:"Jussi Halla-aho", party:"PS"},
{id: 6, name:"Pirkko Ruohonen-Lerner", party:"PS"},
{id: 7, name:"Sampo Terho", party:"PS"},
{id: 8, name:"Anneli Jäätteenmäki", party:"KESK"},
{id: 9, name:"Olli Rehn", party:"KESK"},
{id: 10, name:"Hannu Takkula", party:"KESK"},
{id: 11, name:"Paavo Väyrynen", party:"KESK"},
{id: 12, name:"Christina Gestrin", party:"RKP"},
{id: 13, name:"Nils Torvalds", party:"RKP"},
{id: 14, name:"Timo Harakka", party:""},
{id: 15, name:"Liisa Jaakonsaari", party:""},
{id: 16, name:"Miapetra Kumpula-Natri", party:""},
{id: 17, name:"Li Andersson", party:"VAS"},
{id: 18, name:"Merja Kyllönen", party:"VAS"},
{id: 19, name:"Heidi Hautala", party:"VIHR"},
{id: 20, name:"Oras Tynkkynen", party:"VIHR"}]);


var omatvarat = TAFFY();
omatvarat.insert([
{id:1,member:1,sum:49147.98},
{id:2,member:2,sum:12680.49}]);

var lainarahat = TAFFY();
lainarahat.insert([
{id:1,member:1,sum:60000},
{id:2,member:2,sum:0}]);

var henkilotuki = TAFFY();
henkilotuki.insert([
{id:1,member:1,sum:6558},
{id:2,member:2,sum:17007}
]);

var yritystuki = TAFFY();
yritystuki.insert([
{id:1,member:1,sum:33382},
{id:2,member:2,sum:10320}
]);

var puolueyhdistystuki = TAFFY();
puolueyhdistystuki.insert([
{id:1,member:1,sum:5401.21},
{id:2,member:2,sum:0}
]);

var muutuki = TAFFY();
muutuki.insert([
{id:1,member:1,sum:29212},
{id:2,member:2,sum:6210}
]);



var parties = TAFFY();
parties.insert([{id:1,abbreviation:"KOK",name:"Kansallinen Kokoomus"},
{id:2,abbreviation:"SDP",name:"Suomen Sosialidemokraattinen Puolue"},
{id:3,abbreviation:"VIHR",name:"Vihreä liitto"},
{id:4,abbreviation:"VAS",name:"Vasemmistoliitto"},
{id:5,abbreviation:"PS",name:"Perussuomalaiset"},
{id:6,abbreviation:"KESK",name:"Suomen Keskusta"},
{id:7,abbreviation:"RKP",name:"Ruotsalainen kansanpuolue"},
{id:8,abbreviation:"KD",name:"Suomen Kristillisdemokraatit"},
{id:9,abbreviation:"SVR",name:"Sinivalkoinen Rintama"}]);



// wgt 37












//c = members({party:"KOK"}).count();

var dba = members().join(parties, ['party', '===','abbreviation']);


window.onload = function() {

var canvaswidth = 500;
var canvasheight = 500;

var paper = new Raphael(funding, canvaswidth, canvasheight);

var radius = 100;
var phi = 0;
var reps = 10;
var xpos = 0;
var ypos = 0;
var increment = 2 * Math.PI / reps;
var phi = 0;

var circ = {};

council = {};

council.members = new Array();


for(var j = 1; j <= reps; j++){

xpos = canvaswidth/2 + radius * Math.cos(phi);
ypos = canvasheight/2 + radius * Math.sin(phi);

var circle = paper.circle(xpos,ypos,10);
circle.attr("fill", "#f00");

//circ[j]

// dg 40

var b = members({id:j}).first();
circle.name = b.name;
circle.party = b.party;
circle.xpos = xpos;
circle.ypos = ypos;
circle.phi = phi;
namerad = 1.7;

council.members[j].party = b.party;
council.members[j].xpos = xpos;
council.members[j].ypos = ypos;



//circle.attr("stroke", "#fff");

phi += increment;

circle.mouseover(function(evt){
var a = members({id:j}).first();
//text(xpos, ypos, a.name).attr("fill", "#f00");
var side = 50;
var txpos = canvaswidth/2 + this.namerad * radius * Math.cos(this.phi);
var typos = canvaswidth/2 + this.namerad * radius * Math.sin(this.phi);

//var dpn = d({id:j}).first();

var t = paper.text(txpos, typos, this.name).attr("fill", "#f00");
var t = paper.text(txpos, typos+10, this.party).attr("fill", "#f00");
//var t = paper.text(txpos, typos+20, d.name);

this.attr("fill", "#a00");
});


circle.mouseout(function(evt){
var a = members({id:j}).first();
//this.text(xpos, ypos, a.name).attr("fill", "#f00");
this.attr("fill", "#f00");
//var t = paper.text(this.xpos+50, this.ypos, this.name).attr("fill", "#aaa");

var txpos = canvaswidth/2 + this.namerad * radius * Math.cos(this.phi);
var typos = canvasheight/2 + this.namerad * radius * Math.sin(this.phi);
var t = paper.text(txpos, typos, this.name).attr("fill", "#ffffff");

});

circle.click(function(evt){
/*                paper.setViewBox(canvaswidth/10 + this.xpos - radius/10,
                                 canvasheight/20 + this.ypos - radius/10,
                                 canvaswidth/10 + this.xpos + radius/10,
                                 canvasheight/20 + this.ypos + radius/10, false);
*/

 var closeup = function(){
                paper.setViewBox(canvaswidth/10 + this.xpos - radius/10,
                                 canvasheight/20 + this.ypos - radius/10,
                                 canvaswidth/10 + this.xpos + radius/10,
                                 canvasheight/20 + this.ypos + radius/10, false);
 };

 var returnlink = paper.text(15, 18, "\u2190 Takaisin").attr({"font": 'Arial',"font-size": 1, stroke: "none", fill: "#aaa", "text-anchor": "start"});

  returnlink.click(closeup);

});






/*
	circle.click(function () {
		var dBar, cb, baBu;
		cb = function (){
			shield.remove();
			circle.show();
//			dBar.remove();
		}
	 	paraG.r.setViewBox(paraG.MPs[theMP].x-20, paraG.MPs[theMP].y-27.5, 70, 55, false);
		var shield = paraG.r.rect(-400, -580, 800, 600).attr({fill: "#121212", "fill-opacity":.8}
       }
*/



//var t = paper.text(textx, pos, a.name);
//t.attr("fill", "#f00");

//}

}

//var tt = paper.text(100, 100, increment.toString());



var pos = 20;
var rectanglewidth = 100;
var rectangleheight = 20;
var rectxcoord = 40;

var textx = 90;

for(var i = 1; i < 10; i++){

a = members({id:i}).first();
//a.name
//a.party

var t = paper.text(textx, pos, a.name);
t.attr("fill", "#f00");

var r = paper.rect(rectxcoord, pos - 5, rectanglewidth, rectangleheight);


if(i%4 == 0){
textx += rectanglewidth;
rectxcoord += rectanglewidth;
pos = 0;
}

pos += 20;

}

}

/*
window.onload = function() {
		paraG.MPs = new Array();
		var elRef = document.getElementById('varavi');
	 	
		if(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect){
		paraG.r = new Raphael(elRef, 900, 700);
	 	paraG.r.setViewBox(-350, -560, 700, 550, false);
	//	calcPositions();
	//	filterDraw();
		}else{
		elRef.innerHTML = "Selaimesi ei tue SVG-grafiikkaa. Nähdäksesi visualisoinnin, lataa esim. Firefox, Chrome tai Safari.";
		}
}
*/

