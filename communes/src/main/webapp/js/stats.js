let data = '{"title":"récréation"datas":[{"color":"blue","value":40,"legend":"part 1"},{"color":"red","value":60,"legend":"part 2"},{"color":"green","value":15,"legend":"part 3"}]}';


function test(){
	let d = JSON.parse(data);
	alert(d.title);
}
