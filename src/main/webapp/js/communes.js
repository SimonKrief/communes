let url = "rest/communes/cp/";
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		show(JSON.parse(this.responseText))
	}
}

function getCommunes(){
	let cp = document.getElementById("cp").value;
	xhr.open("GET",url+cp);
	xhr.send();
}

function show(datas){
	for(let i=0 ; i<datas.length ; i++){
		console.log(datas[i]);
	}
}