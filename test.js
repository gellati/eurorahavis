// run by writing load('filename.js') in rhino

/*
var page = "http://www.vaalirahoitus.fi/fi/index/vaalirahailmoituksia/ilmoituslistaus/EUV2014.html";

var elements = $("<div>").html(data)[0].getElementsByTagName("img"); //[0].getElementsByTagName("li");
console.log(elements);
   for(var i = 0; i < elements.length; i++) {
        var theText = elements[i].firstChild.nodeValue;
           // Do something here
 //       }
   }
*/

$.ajax({
     url: "http://www.vaalirahoitus.fi/fi/index/vaalirahailmoituksia/ilmoituslistaus/EUV2014.html",
     dataType: 'text',
     success: function(data) {
          var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
          for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].firstChild.nodeValue;
               // Do something here
console.log(theText);
          }
     }
});



var hello = 1 + 1;
print("hello");
print(hello);
