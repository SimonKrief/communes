
function rectangle() {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	ctx.strokeStyle = "red";
	ctx.fillStyle = "blue";
	ctx.fillRect(10, 10, 50, 50);
}

function path() {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	ctx.fillStyle = "blue";
	// ctx.beginPath();
	// ctx.moveTo(10, 10);
	// ctx.lineTo(100, 100);
	// ctx.moveTo(100, 10);
	// ctx.lineTo(10, 100);
	// ctx.closePath();
	// ctx.stroke();


	// ctx.beginPath();
	// ctx.moveTo(100, 100);
	// ctx.lineTo(150, 100);
	ctx.arc(100, 100, 50, 0, Math.PI / 2);
	// ctx.arc(100, 100, 50, 0, Math.PI / 3);
	ctx.closePath();
	ctx.stroke();
}


var img = new Image();
img.src = images / image.jpg;
img.onload = function () {
	// context.drawImage(this,0,0,150,150,0,0,100,100);
	rectangle();
};



function test() {
	var data = '{"title":"récréation","datas":[{"color":"blue","value":40,"legend":"part 1"},{"color":"red","value":60,"legend":"part 2"},{"color":"green","value":15,"legend":"part 3"}]}';

	let d = JSON.parse(data);

	alert(d.title);
}

function pie() {
	var data = '{"title":"récréation","datas":[{"color":"blue","value":40,"legend":"part 1"},{"color":"red","value":60,"legend":"part 2"},{"color":"green","value":15,"legend":"part 3"}]}';
	var total = 0;
	let obj = JSON.parse(data);
	for (let index = 0; index <= obj.datas.length; index++) {
		total += obj.datas[index].value;

	}

	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	ctx.fillStyle = "blue";
	ctx.arc(100, 100, 50, 0, obj.datas[0].value * Math.PI * 2 / total);

	for (let index = 1; index <= obj.datas.length; index++) {
		ctx.arc(100, 100, 50, obj.datas[index-1].value * Math.PI * 2 / total, obj.datas[index].value * Math.PI * 2 / total);

	}


}
