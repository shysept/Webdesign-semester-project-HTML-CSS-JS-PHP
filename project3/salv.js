
    function getAdress() {
        var out = document.getElementById("displaySection").getElementsByTagName("p");
        if (out[1].style.display === "block") {
            out[1].style.display = "none";
	    } else {
		    out[1].style.display = "block";
	    }
        var AddressToUse = myObj.full_address.replace("newline", "</br>")
        out[1].innerHTML = "<h2 style='color: green;'><u>Address:</u> </h2>" + "<h4>"+ AddressToUse +"</h4>" ;

  }



  function getHours() {
        var out = document.getElementById("displaySection").getElementsByTagName("p");

        if (out[2].style.display === "block") {
            out[2].style.display = "none";
	    } else {
		    out[2].style.display = "block";
	    }
	
	var stringToUse = "";
	var day;
	var Opentime;
	var Closetime;


	var OpenHour;
	var OpenMinute; 

	var CloseHour;
	var CloseMinute;

	if(day = "Monday" in myObj.hours) {
		OpenHour = myObj.hours.Monday.open.split(':')[0];
		OpenMinute = myObj.hours.Monday.open.split(':')[1]; 

		CloseHour = myObj.hours.Monday.close.split(':')[0];
		CloseMinute = myObj.hours.Monday.close.split(':')[1]; 

		if(OpenHour <= 12){
			Opentime = ""+ OpenHour +":" + OpenMinute + " am";
		}else{
			Opentime = ""+ (OpenHour-12) + ":" + OpenMinute + " am";

		}

		if(CloseHour <= 12){
			Closetime = ""+ CloseHour +":" + CloseMinute + " pm";
		}else{
			Closetime = ""+ (CloseHour-12) + ":" + CloseMinute + " pm";

		}

		stringToUse += "Monday: " + Opentime + " - " + Closetime + "<br />";
	}


	if(day = "Tuesday" in myObj.hours) {
		OpenHour = myObj.hours.Tuesday.open.split(':')[0];
		OpenMinute = myObj.hours.Tuesday.open.split(':')[1]; 

		CloseHour = myObj.hours.Tuesday.close.split(':')[0];
		CloseMinute = myObj.hours.Tuesday.close.split(':')[1]; 

		if(OpenHour <= 12){
			Opentime = ""+ OpenHour +":" + OpenMinute + " am";
		}else{
			Opentime = ""+ (OpenHour-12) + ":" + OpenMinute + " am";

		}

		if(CloseHour <= 12){
			Closetime = ""+ CloseHour +":" + CloseMinute + " pm";
		}else{
			Closetime = ""+ (CloseHour-12) + ":" + CloseMinute + " pm";

		}

		stringToUse += "Tuesday: " + Opentime + " - " + Closetime + "<br />";
	}


	if(day = "Wednesday" in myObj.hours) {
		OpenHour = myObj.hours.Wednesday.open.split(':')[0];
		OpenMinute = myObj.hours.Wednesday.open.split(':')[1]; 

		CloseHour = myObj.hours.Wednesday.close.split(':')[0];
		CloseMinute = myObj.hours.Wednesday.close.split(':')[1]; 

		if(OpenHour <= 12){
			Opentime = ""+ OpenHour +":" + OpenMinute + " am";
		}else{
			Opentime = ""+ (OpenHour-12) + ":" + OpenMinute + " am";

		}

		if(CloseHour <= 12){
			Closetime = ""+ CloseHour +":" + CloseMinute + " pm";
		}else{
			Closetime = ""+ (CloseHour-12) + ":" + CloseMinute + " pm";

		}

		stringToUse += "Wednesday: " + Opentime + " - " + Closetime + "<br />";
	}
	
	
	if(day = "Thursday" in myObj.hours) {
		OpenHour = myObj.hours.Thursday.open.split(':')[0];
		OpenMinute = myObj.hours.Thursday.open.split(':')[1]; 

		CloseHour = myObj.hours.Thursday.close.split(':')[0];
		CloseMinute = myObj.hours.Thursday.close.split(':')[1]; 

		if(OpenHour <= 12){
			Opentime = ""+ OpenHour +":" + OpenMinute + " am";
		}else{
			Opentime = ""+ (OpenHour-12) + ":" + OpenMinute + " am";

		}

		if(CloseHour <= 12){
			Closetime = ""+ CloseHour +":" + CloseMinute + " pm";
		}else{
			Closetime = ""+ (CloseHour-12) + ":" + CloseMinute + " pm";

		}

		stringToUse += "Thursday: " + Opentime + " - " + Closetime + "<br />";
	
	}
	
	
	if(day = "Friday" in myObj.hours) {
		OpenHour = myObj.hours.Friday.open.split(':')[0];
		OpenMinute = myObj.hours.Friday.open.split(':')[1]; 

		CloseHour = myObj.hours.Friday.close.split(':')[0];
		CloseMinute = myObj.hours.Friday.close.split(':')[1]; 

		if(OpenHour <= 12){
			Opentime = ""+ OpenHour +":" + OpenMinute + " am";
		}else{
			Opentime = ""+ (OpenHour-12) + ":" + OpenMinute + " am";

		}

		if(CloseHour <= 12){
			Closetime = ""+ CloseHour +":" + CloseMinute + " pm";
		}else{
			Closetime = ""+ (CloseHour-12) + ":" + CloseMinute + " pm";

		}

		stringToUse += "Friday: " + Opentime + " - " + Closetime + "<br />";
	}
	
	out[2].innerHTML="<h2 style='color: green;'><u>Business Hours:</u></h2>" + stringToUse;
}





  function getServices(){
	var out = document.getElementById("displaySection").getElementsByTagName("p");
    if (out[4].style.display === "block") {
		out[4].style.display = "none";
	} else {
		out[4].style.display = "block";
	}

    var stringToUse = "<h2 style='color: green;'><u>Services and Features:</u></h2>";
    for(item in myObj.attributes){
		if(myObj.attributes[item] === true)
				stringToUse += item + "<br>";
		}
		stringToUse += "<h2 style='color: green;'>Good For</h4>";
		var count = 0
		for(item in myObj.attributes.GoodFor){
			if(myObj.attributes.GoodFor[item] === true){
				if(count<4){
					stringToUse += item + ", ";
					count +=1;
				}else{
					stringToUse += item + " ";
				}
			}
		}
		count = 0;
		stringToUse += "<h2 style='color: green;'>Ambience</h4>";
		for(item in myObj.attributes.Ambience){
			if(myObj.attributes.Ambience[item] === true){
				if(count<3){
					stringToUse += item + ", ";
					count +=1;
				}else{
					stringToUse += item + " ";
				}
			}
		}

		count = 0;
		stringToUse += "<h2 style='color: green'>Parking</h4>";
		for(item in myObj.attributes.Parking){
			if(myObj.attributes.Parking[item] === true){
				if(count<1){
					stringToUse += item + ", ";
					count +=1;
				}else{
					stringToUse += item + " ";
				}
			}
		}
		count = 0;
		out[4].innerHTML=stringToUse;

}