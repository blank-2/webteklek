//var random = Math.floor((Math.random() * 2));
//di ko alam panu i read mismong file ngay pero kung na read na okay na tong code na to
//ung na comment
//var obj = JSON.parse();  
//document.getElementById("demo").innerHTML = "\"" + obj[random].quotes + "\"";


//trial lang
var requestUrl = 'json/dbase.json';
var request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
var data;

request.onload = function() {
	data = request.response;
}

function showMenu(){
  var menuItems = document.getElementById('menu');
  data.quotes.forEach(function(item) {
    menuItems.innerHTML += menuItem(item.quotes);
  });
}