var  myJson;
var myObj;
var myXml;
var objXml; 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		myJson = this.responseText;
		myObj= JSON.parse(myJson);
    }
};

xhttp.open("GET","YelpOneBusinessJsonData.json", true);
xhttp.send();




var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
	if(this.readyState == 4 && this.status == 200) {
		objXml = xmlHttp.responseXML;
		
	}
}
	xmlHttp.open("GET","restaurant_menu.xml", true);
	xmlHttp.send();




function buttonToggle(out){
	if (out.style.display === "block") {
		out.style.display = "none";
	} else {
		out.style.display = "block";
	}
}

function getName() {
	var out = document.getElementById("name");
	out.innerHTML = "<h2 style='color: green;'>Name:</h2>" + myObj.name;
	buttonToggle(out);
}



  function getAddress() {
	var out = document.getElementById("adress");
	out.innerHTML = "<h2 style='color: green;'>Address:</h2>" + myObj.full_address;
	buttonToggle(out);
}


function getHours() {
	var out = document.getElementById("hours");
	out.innerHTML = "<h2 style='color: green;'>Hours:</h2>";
	buttonToggle(out);
	for(day in myObj.hours){
	//	if(myObj.hours[day] === true)
		//		out.innerHTML += day + "<br>";
				out.innerHTML += "<h3 style='bold'>"+day+"</h3>";
				out.innerHTML += "Open: "+ myObj.hours[day].open + "AM -";
				var x= parseInt(myObj.hours[day].close);
				var x=x-12;
				out.innerHTML += " Close: "+ x + ":00 PM <br>";
				

		}

}



let x=1;
function getMenu() {
menuOpen(out);
	var out = document.getElementById("menu");
	out.innerHTML = "<h2 style='color: green;'>Menu:</h2>" + myObj.attributes;
	buttonToggle(out)
}



function getServices() {
	var out = document.getElementById("services");
	out.innerHTML = "<h2 style='color: green;'>Services:</h2>";
	buttonToggle(out);
	for(item in myObj.attributes){
		if(myObj.attributes[item] === true)
				out.innerHTML += item + "<br>";
		}
		out.innerHTML += "<h2 style='color: green;'>Good For:</h2>";
		for(item in myObj.attributes["Good For"]){
			if(myObj.attributes["Good For"][item] === true){
					out.innerHTML += item + "<br> ";		
			}
		}
		out.innerHTML += "<h2 style='color: green;'>Attirubutes:</h2>";
		out.innerHTML += "Restaurant type:" + myObj.categories[0];
		out.innerHTML += "<br>Stars:"+ myObj.stars;
		out.innerHTML += "<br>Alcohol:"+ myObj.attributes.Alcohol;
		out.innerHTML += "<br>Noise Level:"+ myObj.attributes["Noise Level"];
		out.innerHTML += "<br>Attire:"+ myObj.attributes.Attire;
		
		for(item in myObj.attributes["T"]){
			if(myObj.attributes["Good For"][item] === true){
					out.innerHTML += item + "<br> ";		
			}
		}
		out.innerHTML += "<h2 style='color: green;'>Ambience:</h2>"
		for(item in myObj.attributes.Ambience){
			if(myObj.attributes.Ambience[item] === true){

					out.innerHTML += item + "<br> ";
				
			}
		}
		out.innerHTML += "<h2 style='color: green;'>Parking:</h2>"
		for(item in myObj.attributes.Parking){
			if(myObj.attributes.Parking[item] === true){

					out.innerHTML += item + "<br> ";
				
			}
		}
}  

	function getBreakfast(){
		var out = document.getElementById("menu1");
		out.innerHTML = "<h2 style='color: green;text-decoration: underline; padding-left:700px;'>Breakfast</h2>"
		
	
		buttonToggle(out)
	}
	function getBrunch(){
		var out = document.getElementById("menu2");
		out.innerHTML = "<h2 style='color: green;text-decoration: underline; padding-left:700px;'>Brunch</h2>"
	}
	function getLunch(){
		var out = document.getElementById("menu3");
		out.innerHTML = "<h2 style='color: green;text-decoration: underline; padding-left:700px;'>Lunch</h2>"
	}
	function getDinner(){
		var out = document.getElementById("menu4");
		out.innerHTML = "<h2 style='color: green;text-decoration: underline; padding-left:700px;'>Dinner</h2>"
	}
	function getDrinks(){
		var out = document.getElementById("menu5");
		out.innerHTML = "<h2 style='color: green;text-decoration: underline; padding-left:700px;'>Drinks</h2>"
	}



function menuOpen(out){  //function to open the menu list	
		if(x==1){
		x++;
		$('.list').css({"display":"block"})
		}else{
		x--;	
		$('.list').css({"display":"none"})
	}}


	