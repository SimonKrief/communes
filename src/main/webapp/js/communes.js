let url = "rest/communes/cp/";
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	//le navigateur vérifie le code 200 et change la silte show si la liste n'as pas changé
	if (this.readyState == 4 && this.status == 200) {
		show(JSON.parse(this.responseText))
	}
}

function getCommunes(arg) {
	// cp=document.getElementById("cp");
	if (arg.value.length >= 3) {
	let cp = document.getElementById("cp").value;
	xhr.open("GET", url + cp);
	xhr.send();
	}
}

function show(datas) {
	for (let i = 0; i < datas.length; i++) {

		console.log(datas[i]);

		let div = document.getElementById("container");
		let liste = document.createElement("ul");
		div.appendChild(liste);
		let ligne = document.createElement("li");
		liste.appendChild(ligne);
		ligne.innerText = datas[i].nom;

	}
}

// function a() {

// 	if (cp.length > 3) {
// 		getCommunes();
// 	}

// }

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("cp").addEventListener("keyup", evt => getCommunes(evt.target));

});

