var  myJson = `{
	"business_id": "5UmKMjUEUNdYWqANhGckJw",
	"full_address": "4734 Lebanon Church RdnewlineDravosburg, PA 15034",
	"hours": {
		"Friday": {
			"close": "21:00",
			"open": "11:00"
		},
		"Tuesday": {
			"close": "21:00",
			"open": "11:00"
		},
		"Thursday": {
			"close": "21:00",
			"open": "11:00"
		},
		"Wednesday": {
			"close": "21:00",
			"open": "11:00"
		},
		"Monday": {
			"close": "21:00",
			"open": "11:00"
		}
	},
	"open": true,
	"categories": ["Fast Food", "Restaurants"],
	"city": "Dravosburg",
	"review_count": 4,
	"name": "Mr Hoagie",
	"neighborhoods": [],
	"longitude": -79.9007057,
	"state": "PA",
	"stars": 4.5,
	"latitude": 40.3543266,
	"attributes": {
		"Take-out": true,
		"Drive-Thru": false,
		"GoodFor": {
			"dessert": false,
			"Late night": true,
			"Lunch": true,
			"Dinner": true,
			"Brunch": true,
			"Breakfast": true
		},
		"Caters": false,
		"Noise Level": "average",
		"Takes Reservations": true,
		"Delivery": false,
		"Ambience": {
			"Romantic": true,
			"intimate": false,
			"classy": false,
			"Hipster": true,
			"divey": false,
			"touristy": false,
			"Trendy": true,
			"upscale": false,
			"Casual": true
		},
		"Parking": {
			"garage": false,
			"Street": true,
			"validated": false,
			"Lot": true,
			"valet": false
		},
		"Has TV": true,
		"Outdoor Seating": true,
		"Attire": "casual",
		"Alcohol": "none",
		"Waiter Service": true,
		"Accepts Credit Cards": true,
		"Good for Kids": true,
		"Good For Groups": true,
		"Price Range": 2
	},
	"type": "business"
}`
var myObj = JSON.parse(myJson);

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

function getMenu() {
	
	var out = document.getElementById("menu");
	out.innerHTML = "<h2 style='color: green;'>Menu:</h2>" + myObj.attributes;
	buttonToggle(out);
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
		for(item in myObj.attributes.GoodFor){
			if(myObj.attributes.GoodFor[item] === true){
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


