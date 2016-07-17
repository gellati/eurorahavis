// rounding function, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
(function(){

	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}

})();



  var fundingtypes = ['ownFunding', 'lentFunding', 'personFunding', 'corporateFunding', 'partyFunding', 'partyAssociationFunding', 'otherFunding'];

  var spendingtypes = ['paperSpending', 'radioSpending', 'tvSpending', 'netSpending', 'otherComSpending', 'outsideSpending', 'materialSpending', 'designSpending', 'eventSpending' , 'conditionalSpending' , 'otherSpending'];


  var fundinglabels = {'ownFunding': 'Omia varoja: ', 
                    'lentFunding': 'Ehdokkaan ja tukiryhmän ottamia lainoja: ', 
                    'personFunding': 'Yksityishenkilöiltä saatu tuki: ',
                    'corporateFunding': 'Yrityksiltä saatu tuki: ', 
                    'partyFunding': 'Puolueelta saatu tuki: ', 
                    'partyAssociationFunding': 'Puolueyhdistyksiltä saatu tuki: ', 
                    'otherFunding': 'Muilta tahoilta saatu tuki: '}


  $(function(){


    var fundingcolors = {
     'ownFunding' : '#E8747C',
     'lentFunding' : '#74CBE8',
     'personFunding' : '#74E883',
     'corporateFunding' : '#F8747C',
     'partyFunding' : '#7FCBE8',
     'partyAssociationFunding' : '#74F883',
     'otherFunding' :  '#E87F7C'
    }


    var cy = cytoscape({

    container: document.getElementById('cy'),

    layout:{
     name: 'circle',
     concentric: function(){ return this.data('weight'); },

     levelWidth: function( nodes ){ return 1; },
     padding: 50,
     minNodeSpacing: 100,
     counterclockwise: true
    },

    ready: function(){
     window.cy = this;
    },

 zoom:{
 level: 20.0
 
 
 },
/*
    viewport:{
    zoom: 300,
    pan: { x: 10,    y: 200 }
    
    },
*/
/*
    animate:{
      pan: { 
       x: 10,
       y: 10 
      },
      zoom: -10
    },
*/
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'width': 'mapData(radius, 0, 100, 20, 120)',
          'height': 'mapData(radius, 0, 100, 20, 120)',
          'content':'data(label)',
          'text-valign':'top',
          'text-outline-width': 2,

   'font-size': 50
   })
  .selector(':selected')
   .css({
    'border-width': 3,
    'border-color':'#fff'   
   })
  .selector('edge')
   .css({
    'opacity': 1,
    'width': 'mapData(strength, 0, 100, 0, 50)',
    'target-arrow-shape': 'none',
    'source-arrow-shape': 'none',
    'line-color': '#000000',
    'source-arrow-color': '#000',
    'target-arrow-color': '#000',    
   })   
  .selector('node[party="KOK"]')
   .css({   
    'background-color': '#0000FF'  
    })
  .selector('node[party="PS"]')
   .css({   
    'background-color': '#663300'})
  .selector('node[party="KESK"]')
   .css({   
    'background-color': '#006600'})
  .selector('node[party="SDP"]')
   .css({   
    'background-color': '#FF0000'})
  .selector('node[party="RKP"]')
   .css({   
    'background-color': '#0099FF'})
  .selector('node[party="VAS"]')
   .css({   
    'background-color': '#CC0000'})
  .selector('node[party="VIHR"]')
   .css({   
    'background-color': '#00CC00'})
  .selector('node[party="KD"]')
   .css({   
    'background-color': '#FF00FF'}),


   elements:{
// cy.add(JSON.stringify(nodes)),

    nodes:
    [
     {data:
       {id:'Pietikainen', number: 0, label:'Sirpa Pietikäinen',radius:100, weight:5, party: 'KOK',
        firstName: "Sirpa",
        lastName: "Pietikainen",
        ownFunding: 49147.98,
        lentFunding: 60000,
        personFunding: 6558,
        corporateFunding: 33382,
        partyFunding: 0,
        partyAssociationFunding: 5401.21,
        otherFunding: 29212,
        paperSpending: 17637.66,
        radioSpending: 979.60,
        tvSpending: 4700.84,
        netSpending: 1375,
        otherComSpending: 0,
        outsideSpending: 127359.01,
        materialSpending: 17936.60,
        designSpending: 6734.44,
        eventSpending: 598,
        conditionalSpending: 5849.07,
        otherSpending: 530.97,
        sankeydata: "data/pietikainen.json",
        homepage: "http://www.sirpapietikainen.net",
        picture: "meppics/40599.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/40599/SIRPA_PIETIKAINEN_home.html"
        }},
     {data:        
       {id:'Sarvamaa', number: 1, label:'Petri Sarvamaa',radius:25.16, weight:5, party: 'KOK',
        firstName: "Petri",
        lastName: "Sarvamaa",
        ownFunding: 12680.49,
        lentFunding: 0,
        personFunding: 17007,
        corporateFunding: 10320,
        partyFunding: 0,
        partyAssociationFunding: 0,
        otherFunding: 6210,
        paperSpending: 6991.38,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 4880,
        otherComSpending: 0,
        outsideSpending: 6156.12,
        materialSpending: 1500,
        designSpending: 14000,
        eventSpending: 1389.99,
        conditionalSpending: 0,
        otherSpending: 11300,
        sankeydata: "data/sarvamaa.json",
        homepage: "http://petrisarvamaa.eu",
        picture: "meppics/112611.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/112611/PETRI_SARVAMAA_home.html"
        }},

     {data:        //stubb funding and spending not equal
       {id:'Stubb', number: 2, label:'Alexander Stubb',radius:68.96, weight:5, party: 'KOK',
        firstName: "Alexander",
        lastName: "Stubb",
        ownFunding: 0,
        lentFunding: 0,
        personFunding: 59574,
        corporateFunding: 62800,
        partyFunding: 0,
        partyAssociationFunding: 0,
        otherFunding: 4300,
        paperSpending: 16125.23,
        radioSpending: 0,
        tvSpending: 20720.02,
        netSpending: 458.40,
        otherComSpending: 0,
        outsideSpending: 49261.80,
        materialSpending: 18915.03,
        designSpending: 9920,
        eventSpending: 4456.13,
        conditionalSpending: 3429.70,
        otherSpending: 3309.82,
        totalFunding: 126674,
        totalSpending: 126596.13,
        sankeydata: "data/stubb.json",
        homepage: "",
        picture: "meppics/1031.jpg",
        euHomepage: "http://www.alexstubb.com"
        }},

     {data:        
       {id:'Virkkunen', number: 3, label:'Henna Virkkunen',radius:50, weight:5, party: 'KOK',
        firstName: "Henna",
        lastName: "Virkkunen",
        ownFunding: 45417.27,
        lentFunding: 0,
        personFunding: 17399,
        corporateFunding: 23150,
        partyFunding: 0,
        partyAssociationFunding: 5891.55,
        otherFunding: 0,
        paperSpending: 23992.20,
        radioSpending: 0,
        tvSpending: 20843.53,
        netSpending: 5090,
        otherComSpending: 0,
        outsideSpending: 14601.26,
        materialSpending: 4507.37,
        designSpending: 8218.44,
        eventSpending: 9882.22,
        conditionalSpending: 0,
        otherSpending: 4722.80,
        sankeydata:  "data/virkkunen.json",
        homepage: "http://www.hennavirkkunen.fi",
        picture: "meppics/124726.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/124726/HENNA_VIRKKUNEN_home.html"
        }},

     {data:        
       {id:'Halla-aho', number: 4, label:'Jussi Halla-aho',radius:2.21, weight:5, party: 'PS',
        firstName: "Jussi",
        lastName: "Halla-aho",
        ownFunding: 0,
        lentFunding: 0,
        personFunding: 0,
        corporateFunding: 0,
        partyFunding: 4055.61,
        partyAssociationFunding: 0,
        otherFunding:0,
        paperSpending: 1176.75,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 0,
        otherComSpending: 0,
        outsideSpending: 0,
        materialSpending: 2058.40,
        designSpending: 0,
        eventSpending: 0,
        conditionalSpending: 0,
        otherSpending: 820.46,
        sankeydata:  "data/halla-aho.json",
        homepage: "http://www.halla-aho.com/jussi",
        picture: "meppics/124727.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/124727/JUSSI_HALLA-AHO_home.html"
        }},

     {data:        
       {id:'Ruohonen-Lerner', number: 5, label:'Pirkko Ruohonen-Lerner',radius:11.78, weight:5, party: 'PS',
        firstName: "Pirkko",
        lastName: "Ruohonen-Lerner",
        ownFunding: 10534.83,
        lentFunding: 0,
        personFunding: 0,
        corporateFunding: 0,
        partyFunding: 10000,
        partyAssociationFunding: 0,
        otherFunding:0,
        paperSpending: 20027.58,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 0,
        otherComSpending: 0,
        outsideSpending: 0,
        materialSpending: 50,
        designSpending: 279,
        eventSpending: 0,
        conditionalSpending: 0,
        otherSpending: 178.25,
        sankeydata:  "data/ruohonen-lerner.json",
        picture: "meppics/920.jpg",
        homepage: "",
        euHomepage: "http://www.pirkon.info"
        }},

     {data:        
       {id:'Terho', number: 6, label:'Sampo Terho',radius:16.38, weight:5, party: 'PS',
        firstName: "Sampo",
        lastName: "Terho",
        ownFunding: 18767.54,
        lentFunding: 0,
        personFunding: 1330,
        corporateFunding: 0,
        partyFunding: 10000,
        partyAssociationFunding: 0,
        otherFunding:0,
        paperSpending: 2473.02,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 5239.90,
        otherComSpending: 0,
        outsideSpending: 0,
        materialSpending: 7283.27,
        designSpending: 11974.40,
        eventSpending: 276.50,
        conditionalSpending: 0,
        otherSpending: 2850.45,
        sankeydata: "data/terho.json",
        homepage: "http://www.sampoterho.net",
        picture: "meppics/107385.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/107385/SAMPO_TERHO_home.html"
        }},

     {data:        
       {id:'Jaatteenmaki', number: 7, label:'Anneli Jäätteenmäki',radius:32.19, weight:5, party: 'KESK',
        firstName: "Anneli",
        lastName: "Jäätteenmaki",
        ownFunding: 5013,
        lentFunding: 0,
        personFunding: 16475.17,
        corporateFunding: 0,
        partyFunding: 5000,
        partyAssociationFunding: 32640.85,
        otherFunding: 0,
        paperSpending: 39623.98,
        radioSpending: 60,
        tvSpending: 0,
        netSpending: 0,
        otherComSpending: 0,
        outsideSpending: 2600,
        materialSpending: 11791.16,
        designSpending: 1460.10,
        eventSpending: 3593.78,
        conditionalSpending: 0,
        otherSpending: 0,
        sankeydata: "data/jaatteenmaki.json",
        homepage: "http://www.annelijaatteenmaki.net",
        picture: "meppics/28314.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/28314/ANNELI_JAATTEENMAKI_home.html"
        }},

     {data:        // rehn funding 10 e too small ??
       {id:'Rehn', number: 8, label:'Olli Rehn',radius: 79.18, weight:5, party: 'KESK',
        firstName: "Olli",
        lastName: "Rehn",
        ownFunding: 35001,
        lentFunding: 0,
        personFunding: 29861,
        corporateFunding: 48250,
        partyFunding: 5000,
        partyAssociationFunding: 0,
        otherFunding: 27350,
        paperSpending: 62023,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 2504,
        otherComSpending: 0,
        outsideSpending: 0,
        materialSpending: 17079,
        designSpending: 13707,
        eventSpending: 12388,
        conditionalSpending: 16500,
        otherSpending: 21271,
        sankeydata: "data/rehn.json",
        homepage: "", // no homepage?
        picture: "meppics/2119.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/2119/OLLI_REHN_home.html"
        }},

     {data:        
       {id:'Takkula', number: 9, label:'Hannu Takkula',radius:59.16, weight:5, party: 'KESK',
        firstName: "Hannu",
        lastName: "Takkula",
        ownFunding: 6127.02,
        lentFunding: 70000,
        personFunding: 11057.50,
        corporateFunding: 16500.77,
        partyFunding: 5000,
        partyAssociationFunding: 0,
        otherFunding:0,
        paperSpending: 26314.24,
        radioSpending: 3261.20,
        tvSpending: 31000.99,
        netSpending: 0,
        otherComSpending: 0,
        outsideSpending: 31780.83,
        materialSpending: 6546.82,
        designSpending: 3000,
        eventSpending: 2000,
        conditionalSpending: 2000,
        otherSpending: 2781.21,
        sankeydata: "data/takkula.json",
        picture: "meppics/28316.jpg",
        homepage: "http://www.hannutakkula.fi",
        euHomepage: "http://www.europarl.europa.eu/meps/en/28316/Hannu_TAKKULA_home.html"
        }},

     {data:        
       {id:'Vayrynen', number: 10, label:'Paavo Väyrynen',radius:50.44, weight:5, party: 'KESK',
        firstName: "Paavo",
        lastName: "Väyrynen",
        ownFunding: 29111,
        lentFunding: 0,
        personFunding: 0,
        corporateFunding: 0,
        partyFunding: 5000,
        partyAssociationFunding: 0,
        otherFunding: 58542,
        paperSpending: 71699,
        radioSpending: 0,
        tvSpending: 14534,
        netSpending: 2900,
        otherComSpending: 0,
        outsideSpending: 1310,
        materialSpending: 0,
        designSpending: 0,
        eventSpending: 2125,
        conditionalSpending: 0,
        otherSpending: 85,
        sankeydata: "data/vayrynen.json",
        homepage: "http://www.vayrynen.com",
        picture: "meppics/2128.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/2128/PAAVO_VAYRYNEN_home.html"
        }},

     {data:        
       {id:'Gestrin', number: 11, label:'Christina Gestrin',radius:46.50, weight:5, party: 'RKP',
        firstName: "Christina",
        lastName: "Gestrin",
        ownFunding: 9316,
        lentFunding: 0,
        personFunding: 16899,
        corporateFunding: 9130,
        partyFunding: 10000,
        partyAssociationFunding: 800,
        otherFunding: 39230,
        paperSpending: 17821,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 1080,
        otherComSpending: 0,
        outsideSpending: 28995,
        materialSpending: 17983,
        designSpending: 3514,
        eventSpending: 5499,
        conditionalSpending: 448,
        otherSpending: 10035,
        sankeydata: "data/gestrin.json",
        homepage: "http://www.gestrin.fi",
        picture: "meppics/623.jpg",
        euHomepage: ""
        }},

     {data:        
       {id:'Torvalds', number: 12, label:'Nils Torvalds',radius:26.98, weight:5, party: 'RKP',
        firstName: "Nils",
        lastName: "Torvalds",
        ownFunding: 8500,
        lentFunding: 0,
        personFunding: 13067,
        corporateFunding: 0,
        partyFunding: 10000,
        partyAssociationFunding: 0,
        otherFunding: 18000,
        paperSpending: 20378,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 1087,
        otherComSpending: 0,
        outsideSpending: 10272,
        materialSpending: 0,
        designSpending: 7222,
        eventSpending: 2546,
        conditionalSpending: 0,
        otherSpending: 8062,
        sankeydata: "data/torvalds.json",
        homepage: "http://www.nilstorvalds.fi",
        picture: "meppics/114268.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/114268/NILS_TORVALDS_home.html"
        }},

     {data:        
       {id:'Harakka', number: 13, label:'Timo Harakka',radius:39.46, weight:5, party: 'SDP',
        firstName: "Timo",
        lastName: "Harakka",
        ownFunding: 11128.56,
        lentFunding: 0,
        personFunding: 4165.85,
        corporateFunding: 740,
        partyFunding: 4000,
        partyAssociationFunding: 24144,
        otherFunding: 28305.90,
        paperSpending: 30885.45,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 1157.50,
        otherComSpending: 0,
        outsideSpending: 10915,
        materialSpending: 14214.37,
        designSpending: 2480,
        eventSpending: 8047.52,
        conditionalSpending: 322.10,
        otherSpending: 4462.37,
        sankeydata: "data/harakka.json",
        picture: "meppics/harakka3-265x355.jpg",
        homepage: "http://www.timoharakka.fi",
        euHomepage: ""
        }},

     {data:        
       {id:'Jaakonsaari', number: 14, label:'Liisa Jaakonsaari',radius:36.41, weight:5, party: 'SDP',
        firstName: "Liisa",
        lastName: "Jaakonsaari",
        ownFunding: 31630,
        lentFunding: 0,
        personFunding: 4409,
        corporateFunding: 0,
        partyFunding: 4000,
        partyAssociationFunding: 17050,
        otherFunding: 9800,
        paperSpending: 34348,
        radioSpending: 0,
        tvSpending: 9027,
        netSpending: 1742,
        otherComSpending: 0,
        outsideSpending: 14145,
        materialSpending: 1399,
        designSpending: 4774,
        eventSpending: 1454,
        conditionalSpending: 0,
        otherSpending: 0,
        sankeydata: "data/jaakonsaari.json",
        homepage: "http://liisajaakonsaari.fi",
        picture: "meppics/96684.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/96684/LIISA_JAAKONSAARI_home.html"
        }},

     {data:        
       {id:'Kumpula-Natri', number: 15, label:'Miapetra Kumpula-Natri',radius: 47.56, weight:5, party: 'SDP',
        firstName: "Miapetra",
        lastName: "Kumpula-Natri",
        ownFunding: 3313.58,
        lentFunding: 0,
        personFunding: 5948.30,
        corporateFunding: 18050,
        partyFunding: 4000,
        partyAssociationFunding: 2500,
        otherFunding: 53556.03,
        paperSpending: 19899.52,
        radioSpending: 0,
        tvSpending: 12712.48,
        netSpending: 1624,
        otherComSpending: 0,
        outsideSpending: 31872,
        materialSpending: 11590.98,
        designSpending: 4612.77,
        eventSpending: 374.55,
        conditionalSpending: 1322.50,
        otherSpending: 3359.11,
        sankeydata: "data/kumpula-natri.json",
        homepage: "http://www.miapetra.fi",
        picture: "meppics/124735.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/124735/MIAPETRA_KUMPULA-NATRI_home.html"
        }},

     {data:        
       {id:'Andersson', number: 16, label:'Li Andersson',radius: 19.42, weight:5, party: 'VAS',
        firstName: "Li",
        lastName: "Andersson",
        ownFunding: 2000,
        lentFunding: 0,
        personFunding: 17669.88,
        corporateFunding: 0,
        partyFunding: 1000,
        partyAssociationFunding: 8000,
        otherFunding: 7000,
        paperSpending: 6795.14,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 4710.19,
        otherComSpending: 0,
        outsideSpending: 13339.18,
        materialSpending: 6045.37,
        designSpending: 0,
        eventSpending: 3280,
        conditionalSpending: 0,
        otherSpending: 1500,
        sankeydata: "data/andersson.json",
        picture: "meppics/Andersson-Li.jpg",
        homepage: "",
        euHomepage: "http://www.liandersson.fi"
        }},

     {data:        
       {id:'Kyllonen', number: 17, label:'Merja Kyllönen',radius: 6.85, weight:5, party: 'VAS',
        firstName: "Merja",
        lastName: "Kyllönen",
        ownFunding: 3780.56,
        lentFunding: 0,
        personFunding: 1161,
        corporateFunding: 0,
        partyFunding: 1000,
        partyAssociationFunding: 3650,
        otherFunding: 3000,
        paperSpending: 6816.55,
        radioSpending: 300,
        tvSpending: 0,
        netSpending: 0,
        otherComSpending: 0,
        outsideSpending: 0,
        materialSpending: 3503.54,
        designSpending: 1000,
        eventSpending: 0,
        conditionalSpending: 0,
        otherSpending: 971.47,
        sankeydata: "data/kyllonen.json",
        homepage: "http://www.merjakyllonen.fi",
        picture: "meppics/124736.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/124736/MERJA_KYLLONEN_home.html"
        }},

     {data:        
       {id:'Hautala', number: 18, label:'Heidi Hautala',radius: 5.48, weight:5, party: 'VIHR',
        firstName: "Heidi",
        lastName: "Hautala",
        ownFunding: 3703.42,
        lentFunding: 0,
        personFunding: 2868.15,
        corporateFunding: 0,
        partyFunding: 3500,
        partyAssociationFunding: 0,
        otherFunding:0,
        paperSpending: 5437.55,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 60,
        otherComSpending: 0,
        outsideSpending: 0,
        materialSpending: 2940.90,
        designSpending: 0,
        eventSpending: 0,
        conditionalSpending: 463.37,
        otherSpending: 1169.75,
        sankeydata: "data/hautala.json",
        homepage: "http://www.heidihautala.fi",
        picture: "meppics/2054.jpg",
        euHomepage: "http://www.europarl.europa.eu/meps/fi/2054/HEIDI_HAUTALA_home.html"
        }},


     {data:        
       {id:'Tynkkynen', number: 19, label:'Oras Tynkkynen',radius:25.26, weight:5, party: 'VIHR',
        firstName: "Oras",
        lastName: "Tynkkynen",
        ownFunding: 20030.46,
        lentFunding: 0,
        personFunding: 20668.40,
        corporateFunding: 0,
        partyFunding: 3500,
        partyAssociationFunding: 2207.18,
        otherFunding:0,
        paperSpending: 15967.09,
        radioSpending: 0,
        tvSpending: 0,
        netSpending: 4494.13,
        otherComSpending: 0,
        outsideSpending: 11539.73,
        materialSpending: 3673.48,
        designSpending: 2844.56,
        eventSpending: 1139.59,
        conditionalSpending: 947.10,
        otherSpending: 5800.36,
        sankeydata: "data/tynkkynen.json",
        picture: "meppics/846.jpg",
        homepage: "http://www.orastynkkynen.fi",
        euHomepage: ""
        }}
        
//} // data
], // nodes

    edges:[
     {data:{id: 'edgeA', source:'Halla-aho', target:'Ruohonen-Lerner', strength:10, sponsor: 'Perussuomalaiset rp'}},
     {data:{id: 'edgeB', source:'Halla-aho', target:'Terho', strength:10, sponsor: 'Perussuomalaiset rp'}},
     {data:{id: 'edgeC', source:'Terho', target:'Ruohonen-Lerner', strength:10, sponsor: 'Perussuomalaiset rp'}},

     {data:{id: 'edgeD', source:'Jaatteenmaki', target:'Rehn', strength:10, sponsor: 'Suomen Keskusta rp'}},
     {data:{id: 'edgeE', source:'Jaatteenmaki', target:'Takkula', strength:10, sponsor: 'Suomen Keskusta rp'}},
     {data:{id: 'edgeF', source:'Jaatteenmaki', target:'Vayrynen', strength:10, sponsor: 'Suomen Keskusta rp'}},
     {data:{id: 'edgeG', source:'Rehn', target:'Takkula', strength:10, sponsor: 'Suomen Keskusta rp'}},
     {data:{id: 'edgeH', source:'Rehn', target:'Vayrynen', strength:10, sponsor: 'Suomen Keskusta rp'}},
     {data:{id: 'edgeI', source:'Takkula', target:'Vayrynen', strength:10, sponsor: 'Suomen Keskusta rp'}},

     {data:{id: 'edgeJ', source:'Gestrin', target:'Torvalds', strength:10, sponsor: 'Svenska folkpartiet i Finland rp'}},

     {data:{id: 'edgeK', source:'Harakka', target:'Jaakonsaari', strength:10, sponsor: 'Suomen Sosialidemokraattinen Puolue rp'}},
     {data:{id: 'edgeL', source:'Harakka', target:'Kumpula-Natri', strength:10, sponsor: 'Suomen Sosialidemokraattinen Puolue rp'}},
     {data:{id: 'edgeM', source:'Jaakonsaari', target:'Kumpula-Natri', strength:10, sponsor: 'Suomen Sosialidemokraattinen Puolue rp'}},

     {data:{id: 'edgeN', source:'Hautala', target:'Tynkkynen', strength:10, sponsor: 'Vihreä liitto rp'}},

     {data:{id: 'edgeO', source:'Pietikainen', target:'Harakka', strength:10, sponsor: 'TEAM'}},
     {data:{id: 'edgeP', source:'Harakka', target:'Jaakonsaari', strength:10, sponsor: 'Ammattiliittor Pro ry'}}
]


} // elements
});


cy.userZoomingEnabled(false);

/*
  .selector('node[*]').qtip
   .css({
   'backgroundColor': 'blue'
  }),
  */
/*
cy.$('*').qtip({
style: {classes: 'qtip-rounded'}
//style: {classes: 'qtip-bootstrap'}
});
*/




cy.$('#Pietikainen').qtip({
/*style: {classes: 'qtip-bootstrap'},*/
//show: { ready: true, event: 'mouseover' },
prerender: true,
show: {event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Pietikainen']").data());},
api:{onShow: function(){return tooltipcontent(cy.nodes("[id='Pietikainen']").data());}}
//position: {target: $('#legend')}
}); // qtip

cy.$('#Sarvamaa').qtip({
prerender: true,
show: {event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Sarvamaa']").data());},
api:{onShow: function(){return tooltipcontent(cy.nodes("[id='Sarvamaa']").data());}}
}); // qtip

cy.$('#Stubb').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Stubb']").data());}
}); // qtip


cy.$('#Virkkunen').qtip({
prerender: true,
show: { ready: true, event: 'mouseover'},
hide: { event: 'mouseout'},
//hide: {event: false}, // keeping tooltip visible after mouseout
content: function(){ return toolTipContent(cy.nodes("[id='Virkkunen']").data());}
}); // qtip


cy.$('#Halla-aho').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Halla-aho']").data());}
}); // qtip

cy.$('#Ruohonen-Lerner').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Ruohonen-Lerner']").data());}
}); // qtip

cy.$('#Terho').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Terho']").data());}
}); // qtip

cy.$('#Jaatteenmaki').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Jaatteenmaki']").data());}
}); // qtip

cy.$('#Rehn').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Rehn']").data());}
}); // qtip

cy.$('#Takkula').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Takkula']").data());}
}); // qtip

cy.$('#Vayrynen').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Vayrynen']").data());}
}); // qtip

cy.$('#Gestrin').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Gestrin']").data());}
}); // qtip
cy.$('#Gestrin').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Gestrin']").data());}
}); // qtip
cy.$('#Torvalds').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Torvalds']").data());}
}); // qtip

cy.$('#Harakka').qtip({
prerender: true,
show: {event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Harakka']").data());},
api:{onShow: function(){return tooltipcontent(cy.nodes("[id='Harakka']").data());}}
}); // qtip

cy.$('#Jaakonsaari').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Jaakonsaari']").data());}
}); // qtip
cy.$('#Kumpula-Natri').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Kumpula-Natri']").data());}
}); // qtip

cy.$('#Andersson').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Andersson']").data());}
}); // qtip


cy.$('#Kyllonen').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Kyllonen']").data());}
}); // qtip

cy.$('#Hautala').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Hautala']").data());}
}); // qtip

cy.$('#Tynkkynen').qtip({
prerender: true,
//show: { ready: true, event: 'mouseover' },
show: { event: 'mouseover' },
hide: { event: 'mouseout'},
content: function(){ return toolTipContent(cy.nodes("[id='Tynkkynen']").data());},
api:{onShow: function(){return tooltipcontent(cy.nodes("[id='Tynkkynen']").data());}}
}); // qtip


cy.$('#edgeA').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeA']").data().sponsor
}); // qtip

cy.$('#edgeB').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeB']").data().sponsor
}); // qtip

cy.$('#edgeC').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeC']").data().sponsor
}); // qtip

cy.$('#edgeD').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeD']").data().sponsor
}); // qtip

cy.$('#edgeE').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeE']").data().sponsor
}); // qtip

cy.$('#edgeF').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeF']").data().sponsor
}); // qtip

cy.$('#edgeG').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeG']").data().sponsor
}); // qtip

cy.$('#edgeH').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeH']").data().sponsor
}); // qtip

cy.$('#edgeI').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeI']").data().sponsor
}); // qtip

cy.$('#edgeJ').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeJ']").data().sponsor
}); // qtip

cy.$('#edgeK').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeK']").data().sponsor
}); // qtip

cy.$('#edgeL').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeL']").data().sponsor
}); // qtip

cy.$('#edgeM').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeM']").data().sponsor
}); // qtip

cy.$('#edgeN').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeN']").data().sponsor
}); // qtip

cy.$('#edgeO').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeO']").data().sponsor
}); // qtip

cy.$('#edgeP').qtip({
prerender: true,
show: { ready: true, event: 'mouseover' },
hide: { event: 'mouseout'},
content: cy.edges("[id='edgeP']").data().sponsor
}); // qtip


/*
     'ownFunding' : '#E8747C',
     'lentFunding' : '#74CBE8',
     'personFunding' : '#74E883',
     'corporateFunding' : '#F8747C',
     'partyFunding' : '#7FCBE8',
     'partyAssociationFunding' : '#74F883',
     'otherFunding' :  '#E87F7C'
*/

function toolTipContent(j){

  var content = document.createElement("div");
  content.className = "tooltipcontent";

  var leftcolumn = document.createElement("div");
  leftcolumn.className = "leftcolumn";
  leftcolumn.setAttribute("float", "left");
  leftcolumn.setAttribute("width", "60px");
  
  var img = document.createElement("img");
  img.setAttribute("src", j.picture);
  img.setAttribute("width", "60px");
  leftcolumn.appendChild(img);

  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = "<p>" + j.firstName + "</p>" + "<p>" + j.lastName + "</p>";
  leftcolumn.appendChild(name);

  var party = document.createElement("div");
  party.className = "party";
  party.innerHTML = j.party;
  leftcolumn.appendChild(party);

  if( j.homepage.length > 2){
    var homepagep = document.createElement("p");
    homepagep.classname = "euhomepagearea";
    var homepage = document.createElement("a");
    homepage.classname = "homepage";
    homepage.href = j.homepage;

    homepage.innerHTML = "Kotisivu";
    homepagep.appendChild(homepage)

    leftcolumn.appendChild(homepagep);
  }

  if( (j.euHomepage).length > 2){
    var euhomepagep = document.createElement("p");
    euhomepagep.classname = "euhomepagearea";
    var euhomepage = document.createElement("a");
    euhomepage.classname = "euhomepage";
    euhomepage.href = j.euHomepage;
    euhomepage.innerHTML = "EU-kotisivu";
    euhomepagep.appendChild(euhomepage)
    leftcolumn.appendChild(euhomepagep);
  }

  content.appendChild(leftcolumn);
  

  var rightcolumn = document.createElement("div");
  rightcolumn.className = "rightcolumn";
  rightcolumn.setAttribute("float", "right");
  rightcolumn.setAttribute("width", "300px");


  var fundingtitle = document.createElement("div");
  fundingtitle.className = "fundingtitle";
  fundingtitle.innerHTML = "Rahoituksen lähteet";
  rightcolumn.appendChild(fundingtitle);


    
/*
  var funding = listFundingSources(j);
  rightcolumn.appendChild(funding);
//  content.appendChild(rightcolumn);
*/
  
  var totalcandidatefunding = document.createElement("div");
  totalcandidatefunding.className = "totalcandidatefunding";

//return sum.toLocaleString("fi-FI");

  totalcandidatefunding.innerHTML = "<strong>" + "Yhteensä " + getTotalCandidateFunding(j).toLocaleString("fi-FI") + " euroa" + "</strong>";
  rightcolumn.appendChild(totalcandidatefunding);


  var fundingbar = document.createElement("div");
  var fundid = j.id + "_funding";
  fundingbar.setAttribute("id", fundid);
  fundingbar.setAttribute("height", "100px");
  fundingbar.setAttribute("width", "100px");

  $('body').append(fundingbar);

  drawFundingBarChart(j);

  $("#" + fundid).css('display', 'none')


  var spendingtitle = document.createElement("div");
  spendingtitle.className = "spendingtitle";
  spendingtitle.innerHTML = "Rahoituksen käyttökohteet";
  rightcolumn.appendChild(spendingtitle);

/*
  var spending = listSpendingSinks(j);
  rightcolumn.appendChild(spending);
*/

  var totalcandidatespending = document.createElement("div");
  totalcandidatespending.className = "totalcandidatespending";  

  totalcandidatespending.innerHTML = "<strong>" + "Yhteensä 	" + getTotalCandidateSpending(j).toLocaleString("fi-FI") + " euroa" + "</strong>";
  rightcolumn.appendChild(totalcandidatespending);

  content.appendChild(rightcolumn);
  
  return $("#" + fundid).css('display', '')

}


function drawFundingBarChart(j){
  var a = getTotalCandidateFunding(j)

console.log(a);
  var b = []; // labels
  var c = []; // values as percentages
  var d = []; // original values

  for(var key in j){
    if($.inArray(key, fundingtypes) > -1.0){
      b.push(fundinglabels[key]);
      c.push(j[key] / a * 100);
      d.push(j[key]);
    }
  }

  b.reverse();
  c.reverse();
  d.reverse();
  
  var id = j.id + "_funding";
  console.log("fundbar " + id);

  var plot2 = $.jqplot(id, [c], {
    title: j.label + ", yhteensä " + a.toLocaleString("fi-FI") + " euroa",
    height: 240,
//    width: 30,
    highlighter:{
//      tooltipContentEditor: function( 
      sizeAdjust: 8,
      tooltipAxes: 'x',
      showTooltip: true,
      formatString: '%s' + "%",
      tooltipLocation: 'n'
    },
    cursor: {
//      show: false
    },
    axes: {
      xaxis: { tickOptions: {formatString: '%d %'}},
      yaxis: { ticks: b, renderer: $.jqplot.CategoryAxisRenderer, fontSize: '18pt'}
    },
    seriesDefaults:{
      renderer: $.jqplot.BarRenderer,
      pointLabels: {show: true, location: 'e', formatString: '%d %', fontSize: '10pt'},
      rendererOptions: {barDirection: 'horizontal'}
    }
  });

}

function drawSpendingBarChart(j){


}


function drawChart(j){
//console.log(j);
        
        /*
        
    */
//    return plot2;
return 2;

}

function listFundingSources(j){
//  var fundingtypes = ['ownFunding', 'lentFunding', 'personFunding', 'corporateFunding', 'partyFunding', 'partyAssociationFunding', 'otherFunding'];

  var ul = document.createElement("ul");

// http://stackoverflow.com/questions/684672/loop-through-javascript-object
  for (var key in j) {

    if($.inArray(key, fundingtypes) > -1.0){
//console.log(key + " -> " + j[key]);

      var li = document.createElement("li");
      var attr = document.createElement("div");
      attr.className=key; // da problem !!!
      attr.innerHTML = fundinglabels[key] + " " + j[key].toLocaleString("fi-FI") + " euroa";
      li.appendChild(attr);
      ul.appendChild(li);

    }
  }// for

  return ul;
} // listFundingSources




function listSpendingSinks(j){
  var spendingtypes = ['paperSpending', 'radioSpending', 'tvSpending', 'netSpending',
   'otherComSpending', 'outsideSpending', 'materialSpending', 'designSpending', 
   'eventSpending' , 'conditionalSpending' , 'otherSpending'];

  var spendinglabels = {'paperSpending': 'Lehtimainonta: ', 
                    'radioSpending': 'Radio: ', 
                    'tvSpending': 'Televisio: ',
                    'netSpending': 'Tietoverkot: ', 
                    'otherComSpending': 'Muut viestintävälineet: ', 
                    'outsideSpending': 'Ulkomainonta: ', 
                    'materialSpending': 'Painetun materiaalin hankinta: ',
                    'designSpending': 'Mainonnan suunnittelu: ',
                    'eventSpending': 'Vaalitilaisuudet: ',
                    'conditionalSpending': 'Vastikkeellisen tuen hankintakulut: ',
                    'otherSpending': 'Muut kulut: '                    
                    }

  var a = getTotalCandidateSpending(j);
  var ul = document.createElement("ul");

// http://stackoverflow.com/questions/684672/loop-through-javascript-object
  for (var key in j) {

    if($.inArray(key, spendingtypes) > -1.0){
//console.log(key + " -> " + j[key]);
      var b = parseFloat(j[key]) / parseFloat(a);
		var c = Math.round10( (b / 10), -1);

      var li = document.createElement("li");
      var attr = document.createElement("div");
      attr.className=key; // da problem !!!
      attr.innerHTML = spendinglabels[key] + " " + j[key].toLocaleString("fi-FI") + " euroa, " + c + " %";
      li.appendChild(attr);
      ul.appendChild(li);

    }
  }// for

  return ul;
} // listFundingSources



function getTotalCandidateFunding(j){
  var sum = 0;
  for (var key in j) {
    if($.inArray(key, fundingtypes) > -1.0){
      sum += j[key];
    }
  }
//console.log(sum);
// var a = cy.nodes()[j].data(); //.map(fundingtypes); //.reduce(function(a,b){return a + b});
//console.log((Math.round(sum, 1)).toLocaleString("fi-FI"));
  return sum;
}

function getTotalCandidateSpending(j){
  var sum = 0;
  for (var key in j) {
    if($.inArray(key, spendingtypes) > -1.0){
      sum += j[key];
    }
  }
//console.log(sum);
// var a = cy.nodes()[j].data(); //.map(fundingtypes); //.reduce(function(a,b){return a + b});
  return sum;

}






function getMaxFunding(){
  var nodes = cy.nodes().length;
  for(var i = 0; i < nodes; i++){
    var a = cy.nodes[i].data().map(fundingtypes);
  }
//  console.log(nodes.data());
}



function moreInfo(j){

  var windowSize = [ "width=200,height=200"];

//  button.innerHTML = $('.newWindow').click(function (event){



 //                   var url = $(this).attr("href");
                    var windowName = "popUp";//$(this).attr("name");
                    var windowSize = windowSize; //Array[$(this).attr("rel")];
 
                    var w = window.open('', windowName, windowSize);
 
// var html = $("#modeltext").html();
 w.document.body.innerHTML = "<p>" + "Rahankäyttö " + j.label + "</p>" 
                           + "<p>" + "Kotisivu " + j.homepage + "</p>";


// w.document.body.innerHTML = toolTipContent(j);
// $(w.document.body).html(html);

                    event.preventDefault();
 
 
 
 //               });

  console.log(j.label);

} // moreInfo()




}); // function

function more(j){
 console.log(j);

 var data = j;
// moreInfo(data);
}


