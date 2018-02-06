// hide the cards on entering
document.getElementById('output').style.opacity = ".1";

// grab the input
document.getElementById('lbs-input').addEventListener('input', func);
function func(e){
	let lbs = e.target.value;
	document.getElementById('grams-output').innerHTML = lbs/0.0022046;
	document.getElementById('kg-output').innerHTML = lbs/2.2046;
	document.getElementById('oz-output').innerHTML = lbs * 16;
	document.getElementById('output').style.opacity = "1";
	// console.log(lbs);

}


