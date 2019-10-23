let url = "rest/communes/cp/";
let xhr = new XMLHttpRequest();
let xhrt = new XMLHttpRequest();
let container = document.getElementById("container");
let form = document.getElementById("formID");
var longi = 150.644;
var lati = -34.397;
var map;
var marker;
var temp = document.getElementById("weather");

xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		show(JSON.parse(this.responseText));
		// showWeather(JSON.parse(this.responseText));
	}

}
xhrt.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		showWeather(JSON.parse(this.responseText));
	}

}

function weatherBalloon(cityID) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + db3ae29b3155fda924af403fbecb871d)
		.then(function (resp) { return resp.json() }) // Convert data to json
		.then(function (data) {
			console.log(data);
		})
		.catch(function () {
			// catch any errors
		});
}


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: lati, lng: longi },
		zoom: 8
	});
	marker = new google.maps.Marker({
		position: { lat: lati, lng: longi },
		map: map,
		title: "The Mew",
		animation: google.maps.Animation.DROP
	});
}

function showWeather(datas) {
	let weather = document.getElementById("weather");
	weather.innerHTML = "";
	// weather.innerHTML=datas["main"]["temp"];
	alert("salut");
	// alert(datas.main.temp);
	alert(datas["list"]["0"]["main"]["temp"]);


	// weather.innerHTML = datas.main.temp;
	weather.innerHTML = "salut";
	alert(datas.main.temp);
	alert("salut");


}
function show(datas) {
	let container = document.getElementById("container");
	container.innerHTML = "";
	let list = document.createElement("ul");
	container.appendChild(list);
	for (let i = 0; i < datas.length; i++) {
		let item = document.createElement("li");
		item.innerHTML = datas[i].nom;
		item.setAttribute("data-lng", datas[i].gpsLongitude);
		item.setAttribute("data-lat", datas[i].gpsLatitude);
		list.appendChild(item);
	}
	attachElt();
}

function getCommunes(inputElt) {
	if (inputElt.value.length > 2) {
		let cp = document.getElementById("cp").value;
		xhr.open("GET", url + cp);
		xhr.send();
	}
}

function getWeather() {
	// xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={db3ae29b3155fda924af403fbecb871d}");
	// xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=db3ae29b3155fda924af403fbecb871d");
	// xhr.open("GET", "https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22");
	// xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22");
	// xhr.send();
	xhrt.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22");
	xhrt.send();
}

function showcoordinates(inputElt) {
	longi = parseFloat(inputElt.dataset.lng);
	lati = parseFloat(inputElt.dataset.lat);
	alert("Longitude: " + longi + "<br>" + "Latitude: " + lati);
	map.setCenter({ lat: lati, lng: longi });
	marker.setPosition({ lat: lati, lng: longi });
	// xhrt.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=db3ae29b3155fda924af403fbecb871d");
	xhrt.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=267a1f870f5cf43ddb2942caee5adf73");

	xhrt.send();
	// getWeather();
	// temp.innerHTML = getWeather();
}

function attachElt() {
	let tousLesLi = document.getElementsByTagName("li");
	for (let i = 0; i < tousLesLi.length; i++) {
		tousLesLi[i].addEventListener("click", evt => showcoordinates(evt.target));

	}
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("cp").addEventListener("keyup", evt => getCommunes(evt.target));
});


