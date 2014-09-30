//v1.7
// Flash Player Version Detection
// Detect Client Browser type
// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");			
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '';
  if (isIE && isWin && !isOpera)
  {
    str += '<object ';
    for (var i in objAttrs)
    {
      str += i + '="' + objAttrs[i] + '" ';
    }
    str += '>';
    for (var i in params)
    {
      str += '<param name="' + i + '" value="' + params[i] + '" /> ';
    }
    str += '</object>';
  }
  else
  {
    str += '<embed ';
    for (var i in embedAttrs)
    {
      str += i + '="' + embedAttrs[i] + '" ';
    }
    str += '> </embed>';
  }

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblclick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}

var regexp = {};
regexp.NUMBER = "^\\d+[\\,|\\.]?\\d*$";

function SelectSubContent(selectedid){	
	var selecteditem = document.getElementById(selectedid);
	if(selecteditem){
		var parent = selecteditem.parentNode;
		var tabs = parent.getElementsByTagName(selecteditem.nodeName);
		for(i=0;i<tabs.length;i++){
			if(parent==tabs[i].parentNode){
				tabs[i].style.display = (tabs[i].id==selectedid)?"":"none";
				var sub_elems = GetFormElements(tabs[i]);
				for(var sub=0;sub<sub_elems.length;sub++){
					sub_elems[sub].disabled = (tabs[i].id!=selectedid);
				}
			}
		}
	}
}		

function GetFormElements(root){
	var rArray = [];
		var inputs = root.getElementsByTagName("INPUT");
		var textareas = root.getElementsByTagName("TEXTAREA");
		var selects = root.getElementsByTagName("SELECT");
		for(var i=0;i<inputs.length;i++) rArray.push(inputs[i]);
		for(var t=0;t<textareas.length;t++) rArray.push(textareas[t]);
		for(var s=0;s<selects.length;s++)rArray.push(selects[s]);
		return rArray;
}

function CheckInputs(form){
	var rtnvalue = true;
	var requiredfields = (document.getElementById("RequiredFields").value!='')?document.getElementById("RequiredFields").value.split(","):[];
	var requiredformatfields = (document.getElementById("RequiredFormatFields").value!='')?document.getElementById("RequiredFormatFields").value.split(","):[];
	var requiredformats = (document.getElementById("RequiredFormats").value!='')?document.getElementById("RequiredFormats").value.split("#"):[];
	if(document.getElementById("common_errormessage")){
		document.getElementById("common_errormessage").style.display="none";
	}
	for(var i = 0; i <  requiredfields.length; i++) {
		RemoveErrorStyle(form.elements[requiredfields[i]]);		
	}
	for(var i = 0; i <  requiredformatfields.length; i++) {
		RemoveErrorStyle(form.elements[requiredformatfields[i]]);		
	}

	for(var i = 0; i <  requiredfields.length; i++) {
		var input = form.elements[requiredfields[i]];
		if(input.length!=undefined && input.type!="select-one"){
			var rtnvalue2 = false;
			for(var j = 0; j <  input.length; j++) {
				if(input[j].type=="text" ||input[j].type=="textarea"){
					rtnvalue2 = (input[j].disabled==true || input[j].value.length>0);
				}else if(input[j].type=="checkbox" || input[j].type=="radio"){
					if(input[j].disabled==true || (input[j].checked==true && input[j].value!="")){
						rtnvalue2 = true;
					}
				}
				
			}	
			if(rtnvalue2==false){
				if(input[0].type=="checkbox"){
					AddErrorStyle(input[0]);
				}else{
					for(var j = 0; j <  input.length; j++) {
						AddErrorStyle(input[j]);
					}
				}
				rtnvalue = rtnvalue2;
			}
		}else{
			rtnvalue = rtnvalue & CheckRequired(input);
		}
	}

	for(var i = 0; i <  requiredformatfields.length; i++) {
		//requiredformats[i].replace("number",regexp.NUMBER);
	
		var input = form.elements[requiredformatfields[i]];	
		if(requiredformats[i].indexOf("sum[")>=0){
			var fields = requiredformats[i].replace("sum[","").replace("]","").split(",");
			var values = [];
			for(var f = 0; f <  fields.length; f++) {
				values.push(form.elements[fields[f]].value);
			}
			if(!isSum({"sum":input.value,"values":values})){
				AddErrorStyle(input);
				rtnvalue = false;
			}
		}
		else if(requiredformats[i].indexOf("hash")==-1){
			var format = new RegExp(requiredformats[i]);
			if(input.value.length>0 && input.value.match(format)==null){
				AddErrorStyle(input);
				rtnvalue = false;
			}
		}else{
	if(input.value.length>0 && "hash"+SHA1(input.value)!=requiredformats[i]){
		AddErrorStyle(input);
		rtnvalue = false;
	}		
		}
	}
	if(rtnvalue==false){
		if(document.getElementById("common_errormessage"))
		document.getElementById("common_errormessage").style.display="block";
	}
	return rtnvalue==true;	
}

var requiredcheck = new Array();

requiredcheck["text"] = requiredcheck["textarea"] = function(elem){
	return (elem.disabled==true || elem.value.length>0);
};
requiredcheck["checkbox"] = requiredcheck["radio"] = function(elem){
	return (elem.disabled==true || (elem.checked==true && elem.value!=""));
};
requiredcheck["select-one"] = function(elem){
	return (elem.disabled==true || elem.options[elem.selectedIndex].value.length>0);
};


function CheckRequired(elem){
	var filled = requiredcheck[elem.type](elem);
	if(!filled){ AddErrorStyle(elem);}
	return filled;
}


function AddErrorStyle(elem){
	try{
	if(elem.length!=undefined){
		elem = elem[0];
	}
	while(elem.className.indexOf("form_row")==-1){
		elem = elem.parentNode;	
	}
	if(elem.className.indexOf(" error ")==-1){
		elem.className +=" error ";
	}
	}catch(e){}	
}

function RemoveErrorStyle(elem){
	try{
	if(elem.length!=undefined){
		elem = elem[0];
	}
	while(elem.className.indexOf("form_row")==-1){
		elem = elem.parentNode;	
	}
	elem.className = elem.className.replace(" error ","");
	}catch(e){}
}

function isNumber(input){
	return input.match(regexp.NUMBER)!=null; 
}

function isSum(params){
	var sum = params["sum"].replace(",",".");
	var rtn = isNumber(sum);
	var values = params["values"];
	for(var v = 0; v <  values.length; v++) {
		values[v] = values[v].replace(",",".");	
		rtn = rtn && isNumber(values[v]);		
	}
	if(rtn==true){	
		var total = 0;
		for(var v = 0; v <  values.length; v++) {
			total += Number(values[v]);		
		}	
		return Number(sum)==Number(total);
	}else{
		return false;
	}
}



function AutoCheckInputs(form,attribute){
	var elems = form.elements;
	var rtn = true;
	for(var i=0;i<elems.length;i++){
		var checkmode = elems[i].getAttribute(attribute);
		if(checkmode!=null)
			rtn &= CheckInput(elems[i], elems[i].getAttribute(attribute));	
	}
	return rtn==1;
}


function AutoCheckInput(elem,check){
	var mode=check.split(",")[0];
	var length= (check.indexOf(",")==-1)?null:check.split(",")[1];
	var le = (length)?"{"+length+"}":"+";
	switch(mode){
		case "nonempty":
			//alert("Check ascii");
			var re = new RegExp("^\[a-zA-Z|\\u00e4||\\u00f6]"+le+"$");
			var tmp = elem.value.length>0;
			//alert("nonempty: " + tmp);
			break;
		case "ascii":
			//alert("Check ascii");
			var re = new RegExp("^\[a-zA-Z|\\u00e4||\\u00f6]"+le+"$");
			var tmp = elem.value.match(re)!=null;
			//alert("ascii: " + tmp + " "+length);
			break;
		case "numeric":
			//alert("Check numeric");
			var re = /^\d+\.?\d+$/;
			var tmp = elem.value.match(re)!=null;
			if(length!=null && tmp==true)
				tmp = (elem.value.length==length);
			//alert("numeric:" + tmp + " "+length);
			break;
		case "integer":
			var re = new RegExp("^\\d"+le+"$");
			var tmp = elem.value.match(re)!=null;
			//alert("integer: " + tmp + " "+length);
			break;			
		case "email":
			var re = new RegExp ("^\\w+[\\.]*\\w+[\\.]*\\w+\\@\\w+[\\.]*\\w+[\\.]*\\w+$");
			var tmp = elem.value.match(re)!=null;
			//alert("email: " + tmp + " "+length);
			break;		
		default:
			//alert("Check default");
	}
	elem.className = (tmp)?"":"error";
	return tmp;
}

function isYTJ(tunnus){
	tunnus = tunnus.split("-").join("");
	if (tunnus.length == 7) tunnus = "0" + tunnus;
	if (tunnus.length!=8) return false;
	var merkit = new Array();
	merkit = tunnus.split("");
	var painotus = new Array(7,9,10,5,8,4,2);
	var tarkiste;
	var laskettutarkiste = 0;
	

	for (var n=0;n<merkit.length;n++){
		if (merkit[n]!="-" && n<merkit.length-1) {
			if (this.isNumber(merkit[n])){
				laskettutarkiste = laskettutarkiste + (Number(merkit[n]) * painotus[n]);
			} else {
				return false;
			}
		}
		if (n == merkit.length-1){
			tarkiste = merkit[n];
		}

	}
	laskettutarkiste = laskettutarkiste%11;
	if (laskettutarkiste>1) laskettutarkiste = 11-laskettutarkiste;
	if (laskettutarkiste==Number(tarkiste)) {
		return true; 
	} else {
		return false;
	}
}

function isHETU(tunnus){
	tunnus = tunnus.substring(0,11).toUpperCase();        
	var t = tunnus;
	var l = Number(t.substring(0,6)+t.substring(7,10))%31;
	if(t.match(/^\d{6}[+-A]\d{3}[0123456789ABCDEFHJKLMNPRSTUVWXY]/)&&t.substring(10,11)=="0123456789ABCDEFHJKLMNPRSTUVWXY".substring(l,l+1))
		return true;
	else
		return false;
}


/**
*
*  Secure Hash Algorithm (SHA1)
*  http://www.webtoolkit.info/
*
**/

function SHA1 (msg) {
 
	function rotate_left(n,s) {
		var t4 = ( n<<s ) | (n>>>(32-s));
		return t4;
	};
 
	function lsb_hex(val) {
		var str="";
		var i;
		var vh;
		var vl;
 
		for( i=0; i<=6; i+=2 ) {
			vh = (val>>>(i*4+4))&0x0f;
			vl = (val>>>(i*4))&0x0f;
			str += vh.toString(16) + vl.toString(16);
		}
		return str;
	};
 
	function cvt_hex(val) {
		var str="";
		var i;
		var v;
 
		for( i=7; i>=0; i-- ) {
			v = (val>>>(i*4))&0x0f;
			str += v.toString(16);
		}
		return str;
	};
 
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;
 
	msg = Utf8Encode(msg);
 
	var msg_len = msg.length;
 
	var word_array = new Array();
	for( i=0; i<msg_len-3; i+=4 ) {
		j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
		msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
		word_array.push( j );
	}
 
	switch( msg_len % 4 ) {
		case 0:
			i = 0x080000000;
		break;
		case 1:
			i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
		break;
 
		case 2:
			i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
		break;
 
		case 3:
			i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8	| 0x80;
		break;
	}
 
	word_array.push( i );
 
	while( (word_array.length % 16) != 14 ) word_array.push( 0 );
 
	word_array.push( msg_len>>>29 );
	word_array.push( (msg_len<<3)&0x0ffffffff );
 
 
	for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
 
		for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
		for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
 
		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;
 
		for( i= 0; i<=19; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		for( i=20; i<=39; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		for( i=40; i<=59; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		for( i=60; i<=79; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
 
		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;
 
	}
 
	var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
 
	return temp.toLowerCase();
 
}

/* resize */
		var min=8;
		var max=28;
		var tagit = ["a","p","span","div","td","th","input","textarea"];
		
		function increaseFontSize() {
			for (var b = 0; b < tagit.length; b++) {
				var p = document.getElementsByTagName(tagit[b]);
				for(i=0;i<p.length;i++) {
					if(p[i].style.fontSize) {
						var s = parseInt(p[i].style.fontSize.replace("px",""));
					} else {
						var s = 12;
					}
					if(s!=max) {
						s += 1;
					}
					p[i].style.fontSize = s+"px"
				}
			}
		}
		function decreaseFontSize() {
			for (var b = 0; b < tagit.length; b++) {
				var p = document.getElementsByTagName(tagit[b]);
				for(i=0;i<p.length;i++) {
					if(p[i].style.fontSize) {
						var s = parseInt(p[i].style.fontSize.replace("px",""));
					} else {
						var s = 12;
					}
					if(s!=max) {
						s -= 1;
					}
					p[i].style.fontSize = s+"px"
				}
			}
		}

/* // resize */

		function addSpaces(nStr){
          if(!nStr ==''){
              nStr += '';
              nStr = nStr.replace(',',".");
              x = nStr.split('.');
              x1 = x[0];
              
              if (x.length > 1) {
                  if (x[1].length==1) x[1] = x[1] + "0";
              }
              
              x2 = x.length > 1 ? ',' + x[1] : ',00';
              
              var rgx = /(\d+)(\d{3})/;
              
              while (rgx.test(x1)) {
                  x1 = x1.replace(rgx, '$1' + ' ' + '$2');
              }
              return x1 + x2;
          }else{
              return '&nbsp;';
          }
        }

		function addSpacesNew(nStr){
          if(!nStr ==''){
              nStr += '';
              nStr = nStr.replace(',',".");
              x = nStr.split('.');
              x1 = x[0];
              
              if (x.length > 1) {
                  if (x[1].length==1) x[1] = x[1] + "0";
              }
              
              x2 = x.length > 1 ? ',' + x[1] : ',00';
              
              var rgx = /(\d+)(\d{3})/;
              
              while (rgx.test(x1)) {
                  x1 = x1.replace(rgx, '$1' + ' ' + '$2');
              }
			  
			  if(x1 != 0){
                 if(x1[0] == 0){
                    x1 = x1.substring(1);
                 }
              }
			  
              document.write(x1 + x2);
          }else{
              document.write('&nbsp;');
          }
        }

        if(!String.prototype.startsWith){
            String.prototype.startsWith = function(str){return (this.match("^"+str)==str)}
        }
        
        if(!String.prototype.endsWith){
            String.prototype.endsWith = function(str){return (this.match(str+"$")==str)}
        }
		
        function PVRFormTools(){
			this.formname = "lomake";
			this.error = null;
			this.checkMinDonationURL = "/extranet/fi/saadut_tuet.stato.stx"
			this.errormessages = new Array();
			this.errormessages["generalerror"] = "Lomakkeen tiedoissa on virhe. Tarkistatko punaisella reunustettujen kenttien tiedot ja painat uudestaan \"Lähetä ja julkaise\"-painiketta.";
			this.errormessages["notnumber"] = "Kentän arvon täytyy olla numero";
			this.errormessages["nothetu"] = "Kentän arvon täytyy olla henkilötunnus, muotoa \"01012011-1234\"";
			this.errormessages["notytj"] = "Kentän arvon täytyy olla virallinen Y-tunnus, muotoa \"1234567-1\"."
			this.errormessages["notyreka"] = "Kentän arvon täytyy olla virallinen yhdistysrekisteritunnus, muotoa \"012.345\"";
			this.errormessages["lessthanminimum"] = "Ilmoitettavan tukisumman minimieuromäärä on 1500 € vuoden alusta laskien";
			this.errormessages["isequalormore"] = "Rahoituksen tulee kattaa kulut";
			this.errormessages["required"] = "Kenttä on pakollinen.";
			this.errormessages["notsum"] = "Summa ei täsmää.";
			this.errormessages["booleanerror"] = "Erittely on pakollinen tieto, mikäli on yli 1500 € lahjoitusrivejä.";
			

			this.submit = function(){
				document.forms[this.formname].submit();
			};

			this.moveValue = function(el){
				if(el.value) {
					document.getElementById(el.name).innerHTML = el.value;
				}
			}

			this.childNodeOrder = new Array();

			this.notOverEuroLimit = function(el) {
				/* -- fade -- */
				var celements = new Array("b_table","c_table","d_table",
				"d_table_22","d_table_22_rows","d_table_22_rows_add",
				"d_table_23","d_table_23a","d_table_23a_rows","d_table_23a_rows_add","d_table_23b","d_table_23b_rows","d_table_23b_rows_add","d_table_23c",
				"d_table_24","d_table_24a","d_table_24a_rows","d_table_24a_rows_add","d_table_24b","d_table_24b_rows","d_table_24b_rows_add","d_table_24c",
				"d_table_25","d_table_25a","d_table_25a_rows","d_table_25a_rows_add","d_table_25b","d_table_25b_rows","d_table_25b_rows_add","d_table_25c",
				"d_table_26","d_table_26a","d_table_26a_rows","d_table_26a_rows_add","d_table_26b","d_table_26b_rows","d_table_26b_rows_add","d_table_26c",
				"d_table_27","d_table_27a","d_table_27a_rows","d_table_27a_rows_add","d_table_27b","d_table_27b_rows","d_table_27b_rows_add","d_table_27c",
				"d_table_28","d_table_28a","d_table_28a_rows","d_table_28a_rows_add","d_table_28b","d_table_28b_rows","d_table_28b_rows_add","d_table_28c"
				);
				var cclass = 'disable_inputs'
				for(var i in celements){
					if(document.getElementById(celements[i])){
						var bcelement = document.getElementById(celements[i]);
						if( bcelement && cclass ){
							var re = new RegExp(cclass,"g");
							if( !bcelement.className.match(re) ){
								bcelement.className += " " + cclass;
							} else {
								if(bcelement.className) {
									var re = new RegExp(cclass,"g");
									bcelement.className = bcelement.className.replace(re,'');
								}
							}
						}
					}
				}
					
				/* -- / fade -- */
				for(x=0; x < document.forms[this.formname].elements.length; x++){
					if (document.forms[this.formname].elements[x].type != 'hidden') {			
						if (document.forms[this.formname].elements[x].name != 'Ehdokas.Tukiryhma' && document.forms[this.formname].elements[x].name != 'Ehdokas.SpostiHuomautus.Spostiosoite'  && document.forms[this.formname].elements[x].name != 'Ehdokas.SpostiHuomautus' && document.forms[this.formname].elements[x].name != 'Meta/Date.Acquired' && document.forms[this.formname].elements[x].name != 'TullutPostilla') {
							if (document.forms[this.formname].elements[x].type == 'text' && document.forms[this.formname].elements[x].name != 'Ehdokas.Tukiryhma') {
								document.forms[this.formname].elements[x].value = "";
								if (document.forms[this.formname].elements[x].getAttribute('onblur') != '' && document.forms[this.formname].elements[x].getAttribute('onblur') != null) 
									document.forms[this.formname].elements[x].onblur();
							}
							if (document.forms[this.formname].elements[x].type != 'textarea' && document.forms[this.formname].elements[x] != el && document.forms[this.formname].elements[x].name != 'Ehdokas.Tukiryhma') {
								document.forms[this.formname].elements[x].disabled = el.checked;
							}
						}
					}
				}
				try {
					document.getElementById('Ehdokas.Kulut').innerHTML = "";
					document.getElementById('Ehdokas.Rahoitus').innerHTML = "";
					document.getElementById('Ehdokas.VaratLainat').innerHTML = "";
					document.getElementById('EhdokasJaTukir.Lainat').innerHTML = "";
					document.getElementById('Ehdokas.TukiYksit').innerHTML = "";
					document.getElementById('Ehdokas.TukiYrit').innerHTML = "";
					document.getElementById('Ehdokas.TukiPuolue').innerHTML = "";
					document.getElementById('Ehdokas.TukiPuolueyhd').innerHTML = "";
					document.getElementById('Ehdokas.TukiMuiltaPaatah').innerHTML = "";
					document.getElementById('Ehdokas.ValitettyTuki').innerHTML = "";
					
					document.getElementsByName('Ehdokas.Rahoitus.TukiYksitVastikYli1500Lisat')[0].disabled = el.checked;
					document.getElementsByName('Ehdokas.Rahoitus.TukiYritLisat')[0].disabled = el.checked;
					document.getElementsByName('Ehdokas.Rahoitus.TukiPLisat')[0].disabled = el.checked;
					document.getElementsByName('Ehdokas.Rahoitus.TukiPyhdLisat')[0].disabled = el.checked;
					document.getElementsByName('Ehdokas.Rahoitus.TukiMuutLisat')[0].disabled = el.checked;
					document.getElementsByName('Ehdokas.Rahoitus.ValitTukiMuutLisat')[0].disabled = el.checked;
					
				} catch (e) {
					try {
						var taulut = document.getElementsByTagName("table");
						var aputaulu = new Array();
						for(var t=0;t<taulut.length;t++){
							for(var r=0;r<taulut[t].rows.length;r++){
							 var row = taulut[t].rows[r];
								if(row.cells.length>1){
									var solu = row.cells[1];
									var id = solu.id.replace(".","_");
								    aputaulu[solu.id.replace(".","_")] = solu;
								}
							}
						}
						aputaulu["Ehdokas_Kulut"].innerHTML = "";
						aputaulu["Ehdokas_Rahoitus"].innerHTML = "";
						aputaulu["Ehdokas_VaratLainat"].innerHTML = "";
						aputaulu["EhdokasJaTukir_Lainat"].innerHTML = "";
						aputaulu["Ehdokas_TukiYksit"].innerHTML = "";
						aputaulu["Ehdokas_TukiYrit"].innerHTML = "";
						aputaulu["Ehdokas_TukiPuolue"].innerHTML = "";
						aputaulu["Ehdokas_TukiPuolueyhd"].innerHTML = "";
						aputaulu["Ehdokas_TukiMuiltaPaatah"].innerHTML = "";
						aputaulu["Ehdokas_ValitettyTuki"].innerHTML = "";
					} catch (e) {	
					
					}
				}
			}
		
			this.checkKVcheckbox = function() {
				if(document.forms[this.formname].elements['Ehdokas.Kulut.Alle800']) {
					if(document.forms[this.formname].elements['Ehdokas.Kulut.Alle800'].checked) {
						return false;
					} else {
						return true;
					}
				} else {
					return true;
				}
			}
		
			this.orderChildNodes = function(container,field,numeric){
				var orderlista = new Array();
				if(document.getElementById(container)){
					var node =document.getElementById(container).firstChild;
					while(node.nodeName=="#text"){
						node = node.nextSibling;
					}
					
					var tmp = document.getElementById(container).getElementsByTagName(node.nodeName);
					for(var i =0;i< tmp.length;i++){
						if(!tmp[i].getAttribute("headerrow"))
						orderlista.push(tmp[i]);
					}
					if(field.endsWith(".numeric")|numeric){
						orderlista = orderlista.sort(function(a,b){return a.getAttribute(field.replace(".numeric","")) - b.getAttribute(field.replace(".numeric",""))});
					}else{
						var arvot = new Array();
						var orderlista2 = new Array();
			
						for(var i =0;i< orderlista.length;i++){
							arvot[i] = orderlista[i].getAttribute(field).toLowerCase()+"|"+i;
						}
						arvot.sort();
						for(var i =0;i< arvot.length;i++){
							orderlista2[i]=orderlista[arvot[i].split("|")[1]];
						}
						orderlista	= orderlista2;
					}
					if(field==this.childNodeOrder[container]){
						orderlista.reverse();
						this.childNodeOrder[container] = null;
					}else{
						this.childNodeOrder[container] = field;
					}
					for(var i =0;i< orderlista.length;i++){
						document.getElementById(container).appendChild(orderlista[i]);
					}
				}
			};
				
            this.SetSelectedIndex = function(id,value){
            	if(document.getElementById(id)){
	                var lista = document.getElementById(id);
	                for(i=0;i<lista.options.length;i++){
	                    if(lista.options[i].value==value){
	                        lista.selectedIndex=i;
	                        break;
	                    }
	                }
    			}
    		};
	
			this.summarizeTo = function(sumfield){
				if(document.forms[this.formname].elements[sumfield].getAttribute("autosum")=="true"){
					//alert(document.forms[this.formname]);
					var fields = document.forms[this.formname].elements[sumfield].getAttribute("sum").split(",");
					var total = 0;
					for(var f =0;f<fields.length;f++){
						var value = (document.forms[this.formname].elements[fields[f]].value.length>0)?Number(document.forms[this.formname].elements[fields[f]].value.replace(",",".")):0;
						total += value;
					}
					document.forms[this.formname].elements[sumfield].value = total;
					document.forms[this.formname].elements[sumfield].onblur();
				}
			};

			this.isSum =function(params){
				var sum = params["sum"].replace(",",".");
				var rtn = this.isNumber(sum);
				var values = params["values"];
				for(var v = 0; v <  values.length; v++) {
					values[v] = values[v].replace(",",".");	
					rtn = rtn && this.isNumber(values[v]);		
				}
				if(rtn==true){	
					var total = 0;
					for(var v = 0; v <  values.length; v++) {
						total += Number(values[v]);		
					}	
				return Number(sum).toFixed(2)==Number(total).toFixed(2);
				}else{
					return false;
				}
			};

			this.hidebuttons = function () {
				if(document.getElementById('submitbuttons_loader')){ 
					document.getElementById('submitbuttons').style.display = 'none';
					document.getElementById('submitbuttons_loader').style.display = '';
				}
			}

			this.showbuttons = function () {
				if(document.getElementById('submitbuttons_loader')){ 
					document.getElementById('submitbuttons').style.display = '';
					document.getElementById('submitbuttons_loader').style.display = 'none';
				}
			}

			this.validate = function(formname){
				this.hidebuttons();
				this.error = false;
				if(formname){
					this.formname = formname;
				}
				if (this.checkKVcheckbox() == true ) {
					var kentat = document.forms[this.formname].elements;
					for (var i=0;i<kentat.length;i++) {
						if(kentat[i].parentNode.className == "error") {
							kentat[i].parentNode.className = "";
						}
					}
					
					tables = document.getElementsByTagName("table");
					for (var n=0;n<tables.length;n++){
						if (tables[n].getAttribute("checkcolumns")){
							if (tables[n].getAttribute("checkcolumns") == "true"){
								this.checkRequiredColumn(tables[n]);
							}
						}
					}
					
					for (var i=0;i<kentat.length;i++) {
						if(kentat[i].getAttribute("format") == "number"){
							var curVal = kentat[i].value;
							var trimmed = curVal.replace(/\s/g,"");
							var number = trimmed.replace(",",".");
							kentat[i].value = number;
						}
					}
					   
					for (var i=0;i<kentat.length;i++) {
						if(kentat[i].getAttribute("format") == "number"){
							curVal = kentat[i].value;
							trimmed = curVal.replace(/\s/g,"");
							kentat[i].value = trimmed;
						}
						if (kentat[i].getAttribute("required") == "true") {
							if(!this.checkRequiredField(kentat[i])) {
								kentat[i].parentNode.className = "error";
								kentat[i].title = this.errormessages["required"];
								this.error = true;
							} else {
								if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
								if(this.error == false) kentat[i].title = "";
							}
						}
						if (kentat[i].getAttribute("format") == "number" && kentat[i].value.length > 0) {
							if (this.isNumber(kentat[i].value) == false ) {
								kentat[i].parentNode.className = "error";
								kentat[i].title = this.errormessages["notnumber"];
								this.error = true;
							} else {
								if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
								if(this.error == false) kentat[i].title = "";
							}
						}
						if (kentat[i].getAttribute("format") == "ytj" && kentat[i].value.length > 0) {
							if (!(this.isYTJ(kentat[i].value) == true )) {
								kentat[i].parentNode.className = "error";
								kentat[i].title = this.errormessages["notytj"];
								this.error = true;
	
							} else {
								if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
								if(this.error == false) kentat[i].title = "";
							}
						}
						if (kentat[i].getAttribute("format") == "yreka" && kentat[i].value.length > 0) {
							if (!(this.isYREK(kentat[i].value) == true)) {
								kentat[i].parentNode.className = "error";
								kentat[i].title = this.errormessages["notyreka"];
								this.error = true;
	
							} else {
								if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
								if(this.error == false) kentat[i].title = "";
							}
						}
						if (kentat[i].getAttribute("checksum")=="true" && kentat[i].getAttribute("sum") != "" && kentat[i].getAttribute("sum") != null) { // && kentat[i].value.length > 0
							var fields =kentat[i].getAttribute("sum").split(",");
							var values = [];
							for(var f = 0; f <  fields.length; f++) {
								values.push(kentat[fields[f]].value);
								kentat[fields[f]].className = "";
							}
							if (!this.isSum({'sum':kentat[i].value,'values':values})) {
								kentat[i].parentNode.className = "error";
								kentat[i].title = this.errormessages["notsum"];
								for(var f = 0; f <  fields.length; f++) {
								kentat[fields[f]].className = "error";
								}
								this.error = true;
							} else {
								if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
								if(this.error == false) kentat[i].title = "";
							}
						}					
						if(kentat[i].getAttribute("isequalormore") != "" && kentat[i].getAttribute("isequalormore") != null){
							if (
							(Number(kentat[i].value) < Number(kentat[kentat[i].getAttribute("isequalormore")].value)) && Number(kentat[i].value) > -1) {
								kentat[i].parentNode.className = "error";
								kentat[i].title = this.errormessages["isequalormore"];
								this.error = true;
							} else {
								if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
								if(this.error == false) kentat[i].title = "";
							}
						}
						if(kentat[i].getAttribute("boolean") != "" && kentat[i].checked==false && kentat[i].getAttribute("boolean") != null){
							var fields =kentat[i].getAttribute("boolean").split(",");
							var fieldname = kentat[i].getAttribute("booleanmax.field");						
							if (fieldname) var fieldvalue = Number(kentat[fieldname].value);
							var maxvalue = Number(kentat[i].getAttribute("booleanmax.value"));
							if (fieldvalue > 0 && maxvalue <= fieldvalue) {
								if(kentat[i].checked==true){
									for(var f = 0; f <  fields.length; f++) {
										if(kentat[fields[f]].value.length>0){
											kentat[fields[f]].parentNode.className = "error";
											kentat[fields[f]].title = this.errormessages["booleanerror"];
											kentat[i].parentNode.className = "error";
											this.error = true;
										}else{
											if(kentat[fields[f]].parentNode.className == "error" && this.error == false) kentat[fields[f]].parentNode.className = "";
											if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
											if(this.error == false) kentat[fields[f]].title = "";
										}
									}
								} else {
									var ok = false;
									for(var f = 0; f <  fields.length; f++) {
										if (Number(kentat[fields[f]].value)>=maxvalue) {
											ok=true;
										}
									}
									if (ok==false) {
										this.error = true;
									}
									if(this.error && ok==false){
										for(var f = 0; f <  fields.length; f++) {
											kentat[fields[f]].parentNode.className = "error";
											kentat[fields[f]].title = this.errormessages["booleanerror"];
											kentat[i].parentNode.className = "error";
										}
									}else{
										for(var f = 0; f <  fields.length; f++) {
											if(kentat[fields[f]].parentNode.className == "error" && this.error == false) kentat[fields[f]].parentNode.className = "";
											if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
											if(this.error == false) kentat[fields[f]].title = "";
										}
									}
								}	
							}
						}					
						if (Number(kentat[i].getAttribute("minvalue")) > Number(kentat[i].value) && kentat[i].value.length > 0) {
							if (kentat[i].getAttribute("field.yritysnimi") != '' && kentat[i].getAttribute("field.yritysnimi") != null) {
								if (!(this.checkMinDonation(kentat[i].value,kentat[i].getAttribute("minvalue"),kentat[i].getAttribute("field.ytunnus"),kentat[i].getAttribute("field.yrekatunnus"),kentat[i].getAttribute("field.org_ytunnus"),kentat[i].getAttribute("field.yritysnimi")))) {
									kentat[i].parentNode.className = "error";
									kentat[i].title = this.errormessages["lessthanminimum"];
									this.error = true;
								} else {
									if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
									if(this.error == false) kentat[i].title = "";
								}
							} else {
								if (!(this.checkPersonMinDonation(kentat[i].value,kentat[i].getAttribute("minvalue"),kentat[i].getAttribute("field.org_ytunnus"),kentat[i].getAttribute("field.sukunimi"),kentat[i].getAttribute("field.etunimi")))) {
									kentat[i].parentNode.className = "error";
									kentat[i].title = this.errormessages["lessthanminimum"];
									this.error = true;
								} else {
									if(kentat[i].parentNode.className == "error" && this.error == false) kentat[i].parentNode.className = "";
									if(this.error == false) kentat[i].title = "";
								}
							}
						}
					}				
			
	
					var ensimmainentukiRivi = false;
					var toinentukiRivi      = false;
					var tavaraa1            = false;
					var tavaraa2            = false;  
				  
					if(document.getElementById('Tuenantaja.Yritys1.Tuenmaara')){ 
						var tuenMaara           = document.getElementById('Tuenantaja.Yritys1.Tuenmaara');
						var tukijaNimi          = document.getElementById('Tuenantaja.Yritys1.Nimi');
						var etunimiHenkilo      = document.getElementById('Tuenantaja.Henkilo1.Etunimi');
						var skunimiHenkilo      = document.getElementById('Tuenantaja.Henkilo1.Sukunimi');
						var kotikuntaHenkilo    = document.getElementById('Tuenantaja.Henkilo1.Kotikunta');
						var tuenmaaraHenkilo    = document.getElementById("Tuenantaja.Henkilo1.Tuenmaara");
	
						if(tuenMaara.value == ''){
							document.getElementById('Tuenantaja.Yritys1.Tuenmaara').parentNode.className = "error";
							ensimmainentukiRivi = true;
						}
						if(tukijaNimi.value == ''){
							document.getElementById('Tuenantaja.Yritys1.Nimi').parentNode.className = "error";
							ensimmainentukiRivi = true;
						}
						if(ensimmainentukiRivi == true){
							if(etunimiHenkilo.value == ''){
								document.getElementById('Tuenantaja.Henkilo1.Etunimi').parentNode.className = "error";
								toinentukiRivi = true;
							}
							if(skunimiHenkilo.value == ''){
								document.getElementById('Tuenantaja.Henkilo1.Sukunimi').parentNode.className = "error";
								toinentukiRivi = true;
							}
							if(kotikuntaHenkilo.value == ''){
								document.getElementById('Tuenantaja.Henkilo1.Kotikunta').parentNode.className = "error";
								toinentukiRivi = true;
							}
							if(tuenmaaraHenkilo.value == ''){
								document.getElementById('Tuenantaja.Henkilo1.Tuenmaara').parentNode.className = "error";
								toinentukiRivi = true;
							}
						}
						if(ensimmainentukiRivi == true && toinentukiRivi == false){
							ensimmainentukiRivi = false;
							document.getElementById('Tuenantaja.Yritys1.Tuenmaara').parentNode.className = "";
							document.getElementById('Tuenantaja.Yritys1.Nimi').parentNode.className = "";
						}
						
					}
	
					try {
						
					} catch(e) {
						alert(e);
					}
	
					
					if (this.error || ensimmainentukiRivi == true || toinentukiRivi == true) {
						alert(this.errormessages["generalerror"]);
						this.showbuttons();
					} else {
						this.submit();
					}
				
				} else {
					this.submit();
				}
				
				
			};		
				
			this.isNumber = function(number){
				number = number.replace(",",".");			
				return ! isNaN(number-0);
			};

			this.isYTJ = function(tunnus){
				tunnus = tunnus.split("-").join("");
				if (tunnus.length == 7) tunnus = "0" + tunnus;
				if (tunnus.length!=8) return false;
                var merkit = new Array();
                merkit = tunnus.split("");
                var painotus = new Array(7,9,10,5,8,4,2);
				var tarkiste;
				var laskettutarkiste = 0;
				

				for (var n=0;n<merkit.length;n++){
					if (merkit[n]!="-" && n<merkit.length-1) {
						if (this.isNumber(merkit[n])){
							laskettutarkiste = laskettutarkiste + (Number(merkit[n]) * painotus[n]);
						} else {
							return false;
						}
					}
					if (n == merkit.length-1){
						tarkiste = merkit[n];
					}

				}
				laskettutarkiste = laskettutarkiste%11;
				if (laskettutarkiste>1) laskettutarkiste = 11-laskettutarkiste;
				if (laskettutarkiste==Number(tarkiste)) {
					return true; 
				} else {
					return false;
				}
            };

			this.isYREK = function(tunnus){
				/* var osat = new Array(); */
				return true;

				if(tunnus.length > 0 && tunnus.length < 8){
				
					return true;
				
				}else{
				/*
					osat = tunnus.split(".");
					if (osat.length != 2) return false;
					if (osat[0].length<1||osat[0].length>3) return false;
					if (osat[1].length!=3) return false;
					
					return true;*/
					return false;
				}
	        };
			
			this.checkRequiredField = function(el) {
				if (el.type == "text") {
					if(el.value != ""){
						return true;	
					} else {
						return false;
					}
				}
				if (el.type == "checkbox") {
					if (el.checked) {
						return true;	
					} else {
						return false;
					}
				}
				return null;
			}

			this.checkRequiredColumn = function(table){
				for (var i=0;i<table.rows.length;i++){
					if (table.rows[i].getAttribute("formrow")){
						inputs = table.rows[i].getElementsByTagName("INPUT");
						rowempty = true;
						checked = true;
						for (var x=0;x<inputs.length;x++){
							if (inputs[x].parentNode.className == "error" && this.error == false) inputs[x].parentNode.className = "";
							inputs[x].title = "";
							if(this.checkRequiredField(inputs[x])) rowempty = false;
							if (inputs[x].getAttribute("requiredcolumn")) {
								if(!this.checkRequiredField(inputs[x]))
									checked = false;
							}
						}
						if (rowempty==false && checked==false) {
							for (var x=0;x<inputs.length;x++){
								if (inputs[x].getAttribute("requiredcolumn")) {
									if(!this.checkRequiredField(inputs[x])) {
										inputs[x].parentNode.className = "error";
										inputs[x].title = this.errormessages["required"];
										this.error = true;
									} 
								}
							}
						}
					}
				}
				return true;
			};

			this.checkMinDonation = function(value,minvalue,ytunnus,yrekatunnus,org_ytunnus,yritysnimi) {			
				var from = document.forms[this.formname].elements[ytunnus].value;
				if(!from) from = document.forms[this.formname].elements[yrekatunnus].value;
				if(!from) var from_name = document.forms[this.formname].elements[yritysnimi].value;

				var to = document.forms[this.formname].elements[org_ytunnus].value;
				if (window.XMLHttpRequest) { 
					xmlhttp=new XMLHttpRequest();
				} else {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.open("POST",this.checkMinDonationURL,false);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send("ytunnus=" + from + "&org_ytunnus=" + to + "&name=" + from_name);
				if(Number(xmlhttp.responseText) < Number(minvalue)){
					return false;
				} else {
					return true;
				}
			};
			this.checkPersonMinDonation = function(value,minvalue,org_ytunnus,sukunimi,etunimi) {			
				var from = "";
				var from_name = document.forms[this.formname].elements[sukunimi].value + ", " + document.forms[this.formname].elements[etunimi].value;
				var to = document.forms[this.formname].elements[org_ytunnus].value;
				if (window.XMLHttpRequest) { 
					xmlhttp=new XMLHttpRequest();
				} else {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.open("POST",this.checkMinDonationURL,false);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send("ytunnus=" + from + "&org_ytunnus=" + to + "&name=" + from_name);
				if(Number(xmlhttp.responseText) < Number(minvalue)){
					return false;
				} else {
					return true;
				}
			};


            this.addNewRow2 = function(url,tableId) {			
                if (window.XMLHttpRequest) { 
					xmlhttp=new XMLHttpRequest();
				} else {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.open("GET",url,false);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send();

				var tmp = document.createElement("div");
				tmp.innerHTML = '<table>' + xmlhttp.responseText + '</table>';

				var trs=tmp.getElementsByTagName("TR");
				var tmptable = document.getElementById(tableId).getElementsByTagName('tbody');
	
				for (var i = 0; i < trs.length; i++) {
					tmptable[0].appendChild(trs[i].cloneNode(true));
				}
			};


			this.addNewRow = function(url,tableId) {			
                if (window.XMLHttpRequest) { 
					xmlhttp=new XMLHttpRequest();
				} else {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.open("GET",url,false);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send();

				var tmp = document.createElement("div");
				tmp.innerHTML = xmlhttp.responseText;

				var trs=tmp.getElementsByTagName("TR");
				var tmptable = document.getElementById(tableId).getElementsByTagName('tbody');
	
				for (var i = 0; i < trs.length; i++) {
					tmptable[0].appendChild(trs[i].cloneNode(true));
				}
			};

/*
			this.isHETU = function(tunnus){
                tunnus = tunnus.substring(0,11).toUpperCase();        
                var t = tunnus;
                var l = Number(t.substring(0,6)+t.substring(7,10))%31;
                if(t.match(/^\d{6}[+-A]\d{3}[0123456789ABCDEFHJKLMNPRSTUVWXY]/)&&t.substring(10,11)=="0123456789ABCDEFHJKLMNPRSTUVWXY".substring(l,l+1))
                        return true;
                else
                        return false;
	        };

*/
		
		
			// FILEUPLOAD

	var fileform =null;
	var filetarget = null;
	
	this.postFile = function (file){
		
		var fileform,filetarget;
		if(file.getAttribute("formid")!=''&&file.getAttribute("formid")!=null){
			
			
		
			fileform =  document.getElementById(file.getAttribute("formid"));
		}else{
		
			fileform =  file.form;		
		}
		if(file.getAttribute("formtarget")!=''&&file.getAttribute("formtarget")!=null){ 		
			filetarget = document.getElementById(file.getAttribute("formtarget"));
			fileform.target = file.getAttribute("formtarget");			
		}else{
			filetarget = file.form.target;		
		}
		filetarget.setAttribute("running","true");
		
		//if(filetarget.getAttribute("fileid")!=file.id){
		/*	filetarget.onload = function(){
				alert("done");
				
				clearTimeout(Stato.fileuploadtimer);			
				Stato.Writelog("postFile valmis");
				if(file.getAttribute("previewid")!=''&&file.getAttribute("previewid")!=null && file.getAttribute("previewurl")!='' && file.getAttribute("previewurl")!=null){
					Stato.loadContent(file.getAttribute("previewid"),file.getAttribute("previewurl"));				
				}
			}
			filetarget.setAttribute("fileid",file.id);	
			*/
		//}
		if(fileform!=file.form){
			var file2 = file.cloneNode(true);
			fileform.innerHTML = "";						
			if(browser.isIE){
				//file2.id="tmp_file_placeholder";
				
				fileform.appendChild(file2);			
				file.swapNode(file2);
			}else{
				fileform.appendChild(file2);			
			}
			

		}
		if(file.getAttribute("progressbar")!=''&&file.getAttribute("progressbar")!=null){
			
			//this.StartProgressbar(file.getAttribute("progressbar"),file.value);
		}
		fileform.submit();
	};
	
	
	this.HandleFileUpload = function (fileid){
		var file = document.getElementById(fileid);
		var running = document.getElementById(file.getAttribute("formtarget")).getAttribute("running");
		if(running=="true" &&file.getAttribute("previewid")!='' && file.getAttribute("previewid")!=null && file.getAttribute("previewurl")!='' && file.getAttribute("previewurl")!=null){
			clearTimeout(this.fileuploadtimer);
			var filetarget = document.getElementById(file.getAttribute("formtarget"));			
			filetarget.setAttribute("running","false");
			
			var TietoName = file.getAttribute("tietoname");
			var sfp = file.getAttribute("sfp");		
				
				
				
			DynLoader.loadContent('Session_files_form_'+file.getAttribute("formtarget"),'/extranet/TilinpaatostiedotList.html.stx?Tyyppi=Sessio&TietoName='+TietoName+'&sfp='+sfp);
			
		//document.getElementById("lahetysnappi_" + TietoName).style.display = '';
		//document.getElementById("latausnappi_" + TietoName).style.display = 'none';
		
		
		
		}		
		
	};
		
		// FILEUPLOAD END
		
		
	
	}
		
	
		var pvr = new PVRFormTools();

         /**************/
        
  
  
  
	function submitTilinpaatosForm(lomake)
	{
	document.forms[lomake].submit(); 
	}


	function doRekisteriAjaxRequest(rekisterinumero,ordernro){

		if (window.XMLHttpRequest) { 
  				xmlhttp=new XMLHttpRequest();
  			} else {
  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			xmlhttp.onreadystatechange=function()
  			{
  			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    			document.getElementById("show_regnum2_" + ordernro).innerHTML=xmlhttp.responseText;
    			
    			document.getElementById("show_regnum2_" + ordernro).style.display = '';
    			
    			//document.getElementById("show_regnum_hidden_" + ordernro).value = xmlhttp.responseText;
    		}
  		}
		xmlhttp.open("POST","http://yhdistysrekisteri.prh.fi/kysely/nimikysely.htx",true,'YAVTVIR','vtvir');
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("rekisterinumero=" + rekisterinumero);
	
	}
	
	function addDataToForm(ordernro){
		var comapanyName =  document.getElementById("show_regnum_"+ordernro).innerHTML;
		var companyYtjCode = document.getElementById("ytunnus_" + ordernro).value;		

		document.getElementById("ynimi_" + ordernro).value="";
		document.getElementById("ytunnus_" + ordernro).value="";
		document.getElementById('companyCode_' + ordernro).innerHTML = companyYtjCode;
		document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").value = comapanyName;
        document.getElementById("Tuenantaja.Yritys"+ ordernro +".Ytunnus").value = companyYtjCode;
        document.getElementById("registerCheckbox_"+ ordernro).disabled = true;
		document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = true;
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById('reg1_dialog_'+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='none';
		document.getElementById('ann_form_span_remove_' + ordernro).style.display = '';
	}


	function addDataToForm3_Ytunn(ordernro,prefix){
		
		var comapanyName =  document.getElementById(prefix+"show_regnum_"+ordernro).innerHTML;
		var companyYtjCode = document.getElementById(prefix+"ytunnus_"+ordernro).value;
			
		document.getElementById(prefix+ordernro+"Nimi").value = comapanyName;		
		document.getElementById(prefix+ordernro+"Ytunn").value = companyYtjCode;
		
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById(prefix+'reg1_dialog_'+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='none';
		document.getElementById(prefix+"ann_form_span_remove_"+ordernro).style.display = '';
	}
	
	function addDataToForm3_Rtunn(ordernro,prefix){
		var comapanyName =  document.getElementById(prefix+"show_regnum4_"+ordernro).innerHTML;
		var companyYtjCode = document.getElementById(prefix+"rekisteritunnus_"+ordernro).value;
			
		
			
		document.getElementById(prefix+ordernro+"Nimi").value = comapanyName;		
		document.getElementById(prefix+ordernro+"Ytunn").value = companyYtjCode;
		
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById(prefix+'reg2_dialog_'+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='none';
		document.getElementById(prefix+"ann_form_span_remove_"+ordernro).style.display = '';
	}


	function cancelDataToForm(ordernro){
		document.getElementById("show_regnum_"+ordernro).innerHTML = "";
		document.getElementById("ynimi_" + ordernro).value="";
		document.getElementById("ytunnus_" + ordernro).value="";
	    document.getElementById("registerCheckbox_"+ ordernro).disabled = false;
		document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = true;
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById('reg1_dialog_'+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='';
		document.getElementById('ann_form_span_remove_' + ordernro).style.display = 'none';
	}
	
	
	function cancelDataToForm3(ordernro,prefix){
		
		document.getElementById(prefix+"ytunnus_"+ordernro).value="";
		
		document.getElementById(prefix+"show_regnum_"+ordernro).innerHTML="";
  
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById(prefix+"reg1_dialog_"+ ordernro).style.display='none';
		document.getElementById(prefix+"reg2_dialog_"+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='';
		document.getElementById(prefix+"ann_form_span_remove_" + ordernro).style.display = 'none';
		
		
		document.getElementById(prefix+"rekisteritunnus_" + ordernro).value='';
		
		
		document.getElementById(prefix+"show_regnum4_" + ordernro).innerHTML='';
	
	
	
	
	}
	
	
	
	
    function addDataToForm2(ordernro){
		var comapanyName =  document.getElementById("show_regnum4_"+ordernro).innerHTML;
		var companyGroupCode = document.getElementById("rekisteritunnus_" + ordernro).value;
		document.getElementById("ynimi2_" + ordernro).value="";
		document.getElementById("rekisteritunnus_" + ordernro).value="";
		document.getElementById('companyCode_' + ordernro).innerHTML = companyGroupCode;
		document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").value = comapanyName;
        document.getElementById("Tuenantaja.Yritys"+ ordernro +".Rekisterinumero").value = companyGroupCode;
        document.getElementById("registerCheckbox_"+ ordernro).disabled = true;
		document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = true;
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById('reg2_dialog_'+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='none';
		document.getElementById('ann_form_span_remove_' + ordernro).style.display = '';
	}
    
	function cancelDataToForm2(ordernro){
		document.getElementById("show_regnum4_"+ordernro).innerHTML = "";
		document.getElementById("ynimi2_" + ordernro).value="";
		document.getElementById("rekisteritunnus_" + ordernro).value="";
		document.getElementById("registerCheckbox_"+ ordernro).disabled = false;
		document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = true;
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='none';
		}
		document.getElementById('reg2_dialog_'+ ordernro).style.display='none';
		document.getElementById('show_reg_links_'+ ordernro).style.display='';
		document.getElementById('ann_form_span_remove_' + ordernro).style.display = 'none';
	}
  
  
  function removeData3(ordernro,prefix){
  		document.getElementById(prefix+ordernro+"Nimi").value ='';		
		document.getElementById(prefix+ordernro+"Ytunn").value ='';
	  	document.getElementById(prefix+ordernro+"Maara").value ='';
	  	document.getElementById(prefix+ordernro+"Maara").value ='';
	  	document.getElementById(prefix+"ytunnus_"+ordernro).value ='';
	    document.getElementById('show_reg_links_'+ ordernro).style.display='';
    	document.getElementById(prefix+"ann_form_span_remove_"+ordernro).style.display = 'none';
	}
	
  
    
	function removeData(ordernro){
		document.getElementById('companyCode_' + ordernro).innerHTML = '';
		
        document.getElementById('Tuenantaja.Yritys'+ ordernro +'.Tuenmaara').value ='';
        
        document.getElementById('Tuenantaja.Yritys'+ ordernro +'.Nimi').value ='';
        document.getElementById("Tuenantaja.Yritys"+ ordernro +".Ytunnus").value = '';
        document.getElementById("Tuenantaja.Yritys"+ ordernro +".Rekisterinumero").value = '';
        document.getElementById("registerCheckbox_"+ ordernro).disabled = false;
        //document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = false;
		//document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Tuenmaara").readOnly = false;
		document.getElementById('show_reg_links_'+ ordernro).style.display='';
		document.getElementById('ann_form_span_remove_' + ordernro).style.display = 'none';
	}
	
	function openYtjPopUp(ordernro){
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='';
		}
		document.getElementById('reg1_dialog_' + ordernro).style.display='';
	}
	
	function openYtjPopUp3(ordernro,prefix){
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='';
		}
		document.getElementById(prefix+'reg1_dialog_' + ordernro).style.display='';
	}
	
	function openRekisteriPopUp(ordernro){
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='';
		}
		document.getElementById('reg2_dialog_' + ordernro).style.display='';
	}
	
	function openRekisteriPopUp3(ordernro,prefix){
		if (document.getElementById('vtv_dimmer')){
			document.getElementById('vtv_dimmer').style.display='';
		}
		document.getElementById(prefix+'reg2_dialog_' + ordernro).style.display='';
	}
	
  function checkBoxCheck(ordernro){
		if(document.getElementById("registerCheckbox_" + ordernro).checked == true){
			document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = false;
			document.getElementById('show_reg_links_' + ordernro).style.display='none';
			document.getElementById('ann_form_span_remove_' + ordernro).style.display='none';
             document.getElementById('Tuenantaja.Yritys'+ ordernro +'.Ytunnus').value = '';
		}else{
			document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").value = '';
			document.getElementById("Tuenantaja.Yritys"+ ordernro + ".Nimi").readOnly = true;
			document.getElementById('show_reg_links_' + ordernro).style.display='';
		}	
	}
	
	function checkBoxCheck3(ordernro,prefix){
		if(document.getElementById(prefix+"registerCheckbox_"+ordernro).checked == true){
			document.getElementById(prefix+ordernro+'Nimi').readOnly = false;
			//document.getElementById(prefix+ordernro+'Ytunn').readOnly = false;
			document.getElementById(prefix+'show_reg_links'+ordernro).style.display='none';
			document.getElementById('show_reg_links_'+ordernro).style.display='none';
		 	document.getElementById(prefix+ordernro+'Nimi').value = '';
			document.getElementById(prefix+ordernro+'Ytunn').value = '';
			document.getElementById(prefix+ordernro+'Maara').value = '';
			document.getElementById(prefix+'ann_form_span_remove_'+ordernro).style.display='none';
			
			
    }else{
    	document.getElementById(prefix+ordernro+'Nimi').readOnly = true;
			document.getElementById(prefix+ordernro+'Ytunn').readOnly = true;
			document.getElementById(prefix+'show_reg_links'+ordernro).style.display='';
			document.getElementById(prefix+'ann_form_span_remove_'+ordernro).style.display='';
			document.getElementById('show_reg_links_'+ordernro).style.display='';
			
			document.getElementById(prefix+'show_reg_links'+ordernro).style.display='';
			
	
			
		}	
	}
	
	function openSelectedHelp(orginalHeightId,currentHeightId){
		var orginalHeight	= document.getElementById(orginalHeightId).style.height;
		orginalHeight 		= orginalHeight.replace("px","");
		orginalHeightInt 	= parseInt(orginalHeight);
		var currentHeigh	= document.getElementById(currentHeightId).offsetHeight;
		
		var vertailukorkeus = orginalHeightInt + 22;
	
		var tempHeight = orginalHeightInt + 5;
		document.getElementById(orginalHeightId).style.height ='';
		document.getElementById(currentHeightId).style.height ='';
		document.getElementById(orginalHeightId + '_help').style.display = 'none';
        document.getElementById(orginalHeightId + '_help_close').style.display = '';
	}
    function closeSelectedHelp(boxId, height){
        var tempHeight = orginalHeightInt - 5;
		document.getElementById(currentHeightId).style.height = tempHeight +'px';
		document.getElementById(orginalHeightId + '_help').style.display = '';
    }
	
    function checkHeight(orginalHeightId,currentHeightId){
		var orginalHeight	= document.getElementById(orginalHeightId).style.height;
		orginalHeight 		= orginalHeight.replace("px","");
		orginalHeightInt 	= parseInt(orginalHeight);
		
		var currentHeigh	= document.getElementById(currentHeightId).offsetHeight;

		var vertailukorkeus = orginalHeightInt + 22;
		
		
		
		if(vertailukorkeus < currentHeigh){
			
			var tempHeight = orginalHeightInt - 5;
			document.getElementById(currentHeightId).style.height = tempHeight +'px';
			document.getElementById(orginalHeightId + '_help').style.display = '';

		}
	}
    function checkHeight2(orginalHeightId,orginalHeight,currentHeightId){
		
        orginalHeightInt 	= parseInt(orginalHeight);
		
		var currentHeigh	= document.getElementById(currentHeightId).offsetHeight;

		var vertailukorkeus = orginalHeightInt + 22;
		
		
		
		if(vertailukorkeus < currentHeigh){
			
			var tempHeight = orginalHeightInt - 5;
			document.getElementById(currentHeightId).style.height = tempHeight +'px';
			document.getElementById(orginalHeightId + '_help').style.display = '';
            document.getElementById(orginalHeightId + '_help_close').style.display = 'none';
		}
	}
	
	function removeSelectedRow(id,type){
		if(type=="puolue"){
			var varmistus = confirm("Oletko varma, että haluat poistaa tämän puoluelyhenteen?");
		}else if (type="vaalipiiri"){
			var varmistus = confirm("Oletko varma, että haluat poistaa tämän vaalipiirin?");
		}else{
			return;
		}
		if (varmistus){	
			Stato.JQuery("tr#"+ id +"_tr").fadeOut("slow", function() {
    			document.getElementById(id).value="false";
			}); 
			return;
		}else{
			return;
		}

		
	}












//YTJ-LIITTYMA



function doYritysAjaxRequest(ynumero,url2,ordernro,returnfield,div){
	
		if (window.XMLHttpRequest) { 
			xmlhttp=new XMLHttpRequest();
  		} else {
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
		xmlhttp.onreadystatechange=function(){
  			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    			var txt = xmlhttp.responseText;
				var mySplitResult = txt.split("<nimi>");
				if (mySplitResult.length>1 && mySplitResult[0] !='') {
					if(mySplitResult[1] !=''){
						var nimi = mySplitResult[1].split("</nimi>");
							document.getElementById(div).innerHTML=nimi[0];
	    				document.getElementById(div).style.display = '';
	    				//document.getElementById(returnfield).value = nimi[0]; ei y:ta viela tassa vaiheessa lomakkeeseen
						document.getElementById(div+"_accept").style.display = '';
					}
				} else{
					document.getElementById(div).innerHTML="Yhdistysrekisterinumerolla ei löydy yhdistystä. Tarkistatko tunnuksen ja yrität uudelleen.";
		    		document.getElementById(div).style.display = '';
				}
    		}
  		}
		xmlhttp.open("POST",url2,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("code=" + ynumero);
	}
	
	function doAjaxRequest(ynumero,url1,returnfield,div){
		
		if (window.XMLHttpRequest) { 
			xmlhttp=new XMLHttpRequest();
  		} else {
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
		xmlhttp.onreadystatechange=function(){
			
  			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  				var tmp = xmlhttp.responseText.replace(/^\s*|\s*$/g,'');
					if (tmp.length>1) {
							document.getElementById(div).innerHTML=tmp;
		    			document.getElementById(div).style.display = '';
						document.getElementById(div+"_accept").style.display = '';
		    		} else {
		    			document.getElementById(div).innerHTML="Y-tunnuksella ei l\u00F6ydy yrityst\E00E4. Tarkistatko tunnuksen ja yrit\E00E4t uudelleen.";
		    			document.getElementById(div).style.display = '';
		    		}
    			}
  			}
  			
				xmlhttp.open("POST",url1,true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send("ytjcode=" + ynumero);
	}






