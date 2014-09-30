
// data

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
{id: 14, name:"Timo Harakka", party:"SDP"},
{id: 15, name:"Liisa Jaakonsaari", party:"SDP"},
{id: 16, name:"Miapetra Kumpula-Natri", party:"SDP"},
{id: 17, name:"Li Andersson", party:"VAS"},
{id: 18, name:"Merja Kyllönen", party:"VAS"},
{id: 19, name:"Heidi Hautala", party:"VIHR"},
{id: 20, name:"Oras Tynkkynen", party:"VIHR"}]);


var omatvarat = TAFFY();
omatvarat.insert([
{id:1,member:1,sum:49147.98},
{id:2,member:2,sum:12680.49},
{id:3,member:3,sum:0},
{id:4,member:4,sum:45417.27},
{id:5,member:5,sum:0},
{id:6,member:6,sum:10534.83},
{id:7, member:7, sum: 18767.54},
{id:8, member: 8, sum: 5018},
{id:9, member:9, sum:35001},
{id:10, member:10, sum: 6127.02},
{id:11, member:11, sum:29111},
{id:12, member:12, sum:9316},
{id:13, member:13, sum:8500},
{id:14, member:14, sum:11128.56},
{id:15, member:15, sum:31630},
{id:16, member:16, sum:11724.88},
{id:17, member:17, sum:2000},
{id:18, member:18, sum:3780.56},
{id:19, member:19, sum:3703.42},
{id:20, member:20, sum:20030.46}
]);
//{id: , member:, sum: },
//{id: , member:, sum: },



var lainarahat = TAFFY();
lainarahat.insert([
{id:1,member:1,sum:60000},
{id:2,member:2,sum:0},
{id:3,member:3,sum:0},
{id:4,member:4,sum:0},
{id:5,member:5,sum:0},
{id:6,member:6,sum:0},
{id:7,member:7,sum:0},
{id:8,member:8,sum:0},
{id:9,member:9,sum:0},
{id:10,member:10,sum:70000},
{id:11,member:11,sum:0},
{id:12,member:12,sum:0},
{id:13,member:13,sum:0},
{id:14,member:14,sum:0},
{id:15,member:15,sum:0},
{id:16,member:16,sum:0},
{id:17,member:17,sum:0},
{id:18,member:18,sum:0},
{id:19,member:19,sum:0},
{id:20,member:20,sum:0}
]);
// check this
var henkilotuki = TAFFY();
henkilotuki.insert([
{id:1,member:1,sum:6558},
{id:2,member:2,sum:17007},
{id:3,member:3,sum:59574},
{id:4,member:4,sum:17399},
{id:5,member:5,sum:0},
{id:6,member:6,sum:0},
{id:7,member:7,sum:1330.00},
{id:8,member:8, sum:16475.17},
{id:9,member:9, sum:29861},
{id:10, member:10, sum: 11057.50},
{id:11,member:11,sum:0},
{id:12,member:12,sum:16899},
{id:13,member:13,sum:13067},
{id:14,member:14,sum:4165.85},
{id:15,member:15,sum:4409},
{id:16,member:16,sum:5037},
{id:17,member:17,sum:17669.88},
{id:18,member:18,sum:1161},
{id:19,member:19,sum:2868.15},
{id:20,member:20, sum:20668.40}
]);

var henkilotukihenkilot = TAFFY();
henkilotukihenkilot.insert([
{id:1, member: 2, sum: 2000, name: "Titta-Maria Teittinen"},
{id:2, member: 2, sum: 2000, name: "Hannu Lehessaari"},
{id:3, member: 2, sum: 2500, name: "Kari Österlund"},
{id:4, member: 3, sum: 5000, name: "Björn Wahlroos"},
{id:5, member: 3, sum: 8000, name: "Chaim Zabludovicz"},
{id:6, member: 3, sum: 2000, name: "Kari Stadigh"},
{id:7, member: 3, sum: 2500, name: "Mikael Lilius"},
{id:8, member: 3, sum: 2800, name: "Mikko Laakkonen"},
{id:9, member: 3, sum: 5600, name: "John Lindfors"},
{id:10, member: 3, sum: 2800, name: "Vilhelm Sundström"},
{id:11, member: 19, sum: 1500, name: "Leena-Maija Rantanen"},
{id:12, member:20, sum:1000, name: "Juhana Suoniemi"},
{id:12, member:20, sum:1500, name: "Olli-Poika Parviainen"},
{id:12, member:20, sum:1000, name: "Maija Kajan"},
{id:12, member:20, sum:1000, name: "Satu Hassi"},
{id:12, member:20, sum:1000, name: "Sampsa Hario"},
{id:12, member:20, sum:1500, name: "Riitta Lätti"},
])


var yritystuki = TAFFY();
yritystuki.insert([
{id:1,member:1,sum:33382},
{id:2,member:2,sum:10320},
{id:3,member:3,sum:62800},
{id:4,member:4,sum:23150},
{id:5,member:5,sum:0},
{id:6,member:6,sum:0},
{id:7,member:7,sum:0},
{id:8,member:8,sum:0},
{id:9, member:9, sum:48250},
{id:10, member:10, sum:16500.77},
{id:11, member:11, sum:0},
{id:12,member:12, sum:9130},
{id:13,member:13, sum:0},
{id:14,member:14, sum:740},
{id:15,member:15,sum:0},
{id:16,member:16,sum:10550},
{id:17,member:17,sum:0},
{id:18,member:18,sum:0},
{id:19,member:19,sum:0},
{id:20,member:20,sum:0}
]);

var yritystukiyritykset = TAFFY();
yritystukiyritykset.insert([
{id:1, member: 1, sum: 4032, name: "Lammin Säästöpankki"},
{id:2, member: 1, sum: 2400, name: "Wipunen varainhallinta oy"},
{id:3, member: 3, sum: 2400, name: "Commit oy"},
{id:4, member: 3, sum: 2400, name: "Havator Group oy"},
{id:5, member: 3, sum: 2400, name: "Nokian Renkaat oyj"},
{id:6, member: 3, sum: 2400, name: "Tamro oyj"},
{id:7, member: 9, sum: 2900, name: "Saga Furs Oyj"},
{id:8, member:13, sum:8000, name: "Svenska Bildningsförbundet r.f."},
{id:9, member:13, sum:10000, name:"Stiftelsen för det tvåspråkiga Finland"},
{id:10, member:16, sum:1660, name: "P4 Consulting Oy"},
]);


var puoluetuki = TAFFY();
puoluetuki.insert([
{id:1,member:1,sum:0},
{id:2,member:2,sum:0},
{id:3,member:3,sum:0},
{id:4,member:4,sum:0},
{id:5,member:5,sum:4055.61},
{id:6,member:6,sum:10000},
{id:7,member:7,sum:10000},
{id:8,member:8,sum:5000},
{id:9,member:9,sum:5000},
{id:10,member:10,sum:5000},
{id:11,member:11,sum:5000},
{id:12,member:12,sum:10000},
{id:13,member:13,sum:10000},
{id:14,member:14,sum:4000},
{id:15,member:15,sum:4000},
{id:16,member:16,sum:4000},
{id:17,member:17,sum:1000},
{id:18,member:18,sum:1000},
{id:19,member:19,sum:3500},
{id:20,member:20,sum:3500},
]);

var puoluetukipuolue = TAFFY();
puoluetukipuolue.insert([
{id: 1, member: 5, sum: 4055.61, name: "Perussuomalaiset rp"},
{id: 2, member: 6, sum: 10000, name: "Perussuomalaiset rp"},
{id: 3, member: 7, sum: 10000, name: "Perussuomalaiset rp"},
{id: 4, member: 8, sum: 5000, name: "Suomen Keskusta rp"},
{id: 5, member: 9, sum: 5000, name: "Suomen Keskusta rp"},
{id: 6, member: 10, sum: 5000, name: "Suomen Keskusta rp"},
{id: 7, member: 11, sum: 5000, name: "Suomen Keskusta rp"},
{id:8, member:12, sum:10000, name: "Svenska folkpartiet i Finland rp"},
{id:9, member:13, sum:10000, name: "Svenska folkpartiet i Finland rp"},
{id:10, member:14, sum:4000, name: "Suomen Sosialidemokraattinen Puolue rp"},
{id:11, member:15, sum:4000, name: "Suomen Sosialidemokraattinen Puolue rp"},
{id:12, member:16, sum:4000, name: "Suomen Sosialidemokraattinen Puolue rp"},
{id:13, member:19, sum:3500, name: "Vihreä liitto rp"},
{id:14, member:20, sum:3500, name: "Vihreä liitto rp"},
])

var puolueyhdistystuki = TAFFY();
puolueyhdistystuki.insert([
{id:1,member:1,sum:5401.21},
{id:2,member:2,sum:0},
{id:3,member:3,sum:0},
{id:4,member:4,sum: 891.55},
{id:5,member:5,sum:0},
{id:6,member:6,sum:0},
{id:7,member:7,sum:0},
{id:8,member:8, sum: 32640.85},
{id:9,member:9,sum:0},
{id:10,member:10,sum:0},
{id:11,member:11, sum:0},
{id:12, member:12, sum:800},
{id:13,member:13,sum:0},
{id:14, member:14, sum:24144},
{id:15, member:15, sum:17050},
{id:16, member:16, sum:2500},
{id:17, member:17, sum:8000},
{id:18, member:18, sum:3650},
{id:19, member:19, sum:0},
{id:20,member:20,sum:2207.18}
]);

var puolueyhdistystukiyhdistykset = TAFFY();
puolueyhdistystukiyhdistykset.insert([
{id: 1, member: 1, sum: 5000, name: "Hämeen Kokoomus ry"},
{id: 2, member: 4, sum: 5891.55, name: "Keski-Suomen Kokoomus ry"},
{id: 3, member: 8, sum: 32649.85, name: "Keskustan Etelä-Pohjanmaan piiri ry"},
{id:4, member:14, sum: 20495, name:"Jyväskylän Työväenyhdistys ry"},
{id:5, member:14, sum: 1659,  name:"Äänekosken työväenyhdistys ry"},
{id:6, member:15, sum:10000, name: "Kuusamon sosialidemokraattinen työväenyhdistys ry"},
{id:7, member:15, sum:5000, name: "Oulun sosialidemokraattinen työväenyhdistys ry"},
{id:8, member:17, sum:5000, name:"Varsinais-Suomen Vasemmistoliitto ry"},
{id:9, member: 17, sum:3000, name: "Vänsterförbundets svenska landsstyrelse"},
{id:20, member:20, sum:1237.50, name: "Pirkanmaan Vihreä Liitto ry"}
]);


var muutuki = TAFFY();
muutuki.insert([
{id:1, member:1, sum:29212},
{id:2, member:2, sum:6210},
{id:3, member:3, sum:4300},
{id:4, member:4, sum:0},
{id:5, member:5, sum:0},
{id:6, member: 6, sum:0},
{id:7, member:7, sum:0},
{id:8, member:8, sum:0},
{id:9, member:9, sum:27350},
{id:10, member:10, sum:0},
{id:11, member:11, sum:58542},
{id:12, member:12, sum:39230},
{id:13, member:13, sum:18000},
{id:14, member:14, sum:28305.90},
{id:15, member:15, sum:9800},
{id:16, member:16, sum:53556.03},
{id:17, member:17, sum:7000},
{id:18, member:18, sum:3000},
{id:19, member:19, sum:0},
{id:20,member:20,sum:0}
]);

var muutukitahot = TAFFY();
muutukitahot.insert([
{id: 1, member:1, sum: 10000, name: "Ammattiliitto Pro ry"},
{id: 2, member:1, sum: 1800, name: "Raideammattilaisten yhteisjärjestö JHL ry"},
{id: 3, member: 9, sum: 1900, name: "AKAVA RY"},
{id:4, member:12, sum: 10000, name: "Esbo svenska kulturförening r.f."},
{id:5, member: 12, sum: 9840, name: "Svenska Bildningsförbundet r.f."},
{id:6, member:12, sum: 10000, name: "Stiftelsen för det tvåspråkiga Finland"},
{id:7, member:12, sum: 2540, name: "Föreningen Konstsamfundet r.f."},
{id:8, member:12,  sum: 1590, name: "Stiftelsen för utbildning och kultur på svenska i Finland"},
    {id:9, member:14, sum: 3000, name: "Valmetin metallityöväen ammattiosasto ry"},
{id: 10, member:14, sum: 9500, name: "Jyväskylän ammatillinen paikallisjärjestö ry"},
{id: 11, member:14, sum: 2000, name:"Ammattiliitto Pro ry"},
{id: 12, member: 14, sum: 1500, name: "Auto- ja Kuljetusalan Työntekijäliitto AKT ry"},
{id:13, member:15, sum:3000, name:"PAM"},
{id:14, member:15, sum:1500, name:"TEAM"},
{id:15, member:16, sum: 1600, name:"Energiateollisuus ry"},
{id:16, member:16, sum: 600, name: "Rakennusteollisuus RT ry"},
{id:17, member:16, sum: 1500, name: "TEAM"},
{id:17, member:16, sum: 3000, name: "Palkansaajien opintoyhdistys"},
{id:18, member: 16, sum: 8000, name: "Palvelualojen ammattiliitto PAM ry"},
{id:19, member: 16, sum:10000, name: "Metalliliiton sos.dem.opintoyhdistys"},
{id:20, member: 16, sum: "1500", name: "Suomen Turkiseläinten Kasvattajain Liitto ry"},
{id:21, member:16, sum: 0, name: "Ammattiliitto Pro ry"},
{id:22, member: 16, sum:2000, name: "Sähköliitto"},
{id:23, member: 16, sum:800, name:"Finanssialan Keskusliitto"},
{id:24, member:17, sum: 3000, name: "Vasemmistonuoret ry"},
{id:25, member:18, sum: 1500, name: "Ossi Ahokkaan säätiö"},
{id:26, member:19, sum:2000, name: "Osuuskunta Tradeka-yhtymä"},
]);
//22- 16 Pro summma väärin, rek numero annettu

var rahoitusyhteensa = TAFFY();
rahoitusyhteensa.insert([
{id:1, member:1, sum:183701.19},
{id:2, member:2, sum:46217.49},
{id:3, member:3, sum:126674},
{id:4, member:4, sum:126674},
{id:5, member:5, sum:4055.61},
{id:6, member:6, sum:20534.83},
{id:7, member:7, sum:30097.54},
{id:8, member:8, sum:59129.02},
{id:9, member:9, sum:145472},
{id:10, member:10, sum:108685.29},
{id:11, member:11, sum:92653},
{id:12, member:12, sum:85375},
{id:13, member:13, sum:49567},
{id:14, member:14, sum:72484.31},
{id:15, member:15, sum:66889},
{id:16, member:16, sum:87367.91},
{id:17, member:17, sum:35669.88},
{id:18, member:18, sum:12591.56},
{id:19, member:19, sum:10071.57},
{id:20, member:20, sum:46406.04}
])

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

var cparties = TAFFY();
cparties.insert([
{id:1, party: "KOK", color: "#0000FF"},
{id:2, party:"PS", color:"#663300"},
{id:3, party:"KESK", color: "#006600"},
{id:4, party: "SDP", color: "#FF0000"},
{id:5, party: "RKP", color: "#0099FF"},
{id:6, party: "VAS", color: "#CC0000"},
{id:7, party: "VIHR", color: "#00CC00"},
{id:8, party: "KD", color: "#FF00FF"},
{id:9, party: "SVR", color: "#000000"}
]);

var MEPpages = TAFFY();
MEPpages.insert([
{id: 1, member: 1, page: "http://www.europarl.europa.eu/meps/fi/40599/SIRPA_PIETIKAINEN_home.html"},
{id: 2, member: 2, page: "http://www.europarl.europa.eu/meps/fi/112611/PETRI_SARVAMAA_home.html"},
{id: 3, member: 3, page: ""},
{id: 4, member: 4, page: "http://www.europarl.europa.eu/meps/fi/124726/HENNA_VIRKKUNEN_home.html"},
{id: 5, member: 5, page: "http://www.europarl.europa.eu/meps/fi/124727/JUSSI_HALLA-AHO_home.html"},
{id: 6, member: 6, page: ""},
{id: 7, member: 7, page: "http://www.europarl.europa.eu/meps/fi/107385/SAMPO_TERHO_home.html"},
{id: 8, member: 8, page: "http://www.europarl.europa.eu/meps/fi/28314/ANNELI_JAATTEENMAKI_home.html"},
{id: 9, member: 9, page: "http://www.europarl.europa.eu/meps/fi/2119/OLLI_REHN_home.html"},
{id: 10, member: 10, page: ""},
{id: 11, member: 11, page: "http://www.europarl.europa.eu/meps/fi/2128/PAAVO_VAYRYNEN_home.html"},
{id: 12, member: 12, page: ""},
{id: 13, member: 13, page: "http://www.europarl.europa.eu/meps/fi/114268/NILS_TORVALDS_home.html"},
{id: 14, member: 14, page: ""},
{id: 15, member: 15, page: "http://www.europarl.europa.eu/meps/fi/96684/LIISA_JAAKONSAARI_home.html"},
{id: 16, member: 16, page: "http://www.europarl.europa.eu/meps/fi/124735/MIAPETRA_KUMPULA-NATRI_home.html"},
{id: 17, member: 17, page: ""},
{id: 18, member: 18, page: "http://www.europarl.europa.eu/meps/fi/124736/MERJA_KYLLONEN_home.html"},
{id: 19, member: 19, page: "http://www.europarl.europa.eu/meps/fi/2054/HEIDI_HAUTALA_home.html"},
{id: 20, member: 20, page: ""}
]);


