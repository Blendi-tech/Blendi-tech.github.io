
function log() {
	let tlogo = document.getElementById('t');
	let flogo = document.getElementById('l1');
	let img = "phone1.png";
	tlogo.style.color = "white";
	flogo.src = img;
}
function logout() {
	let tlogo = document.getElementById('t');
	let flogo = document.getElementById('l1');
	let img = "phone.png";
	tlogo.style.color = "black";
	flogo.src = img;
}


function log1() {
	let tlogo = document.getElementById('t1');
	let flogo = document.getElementById('l2');
	let img = "email1.png";
	tlogo.style.color = "white";
	flogo.src = img;
}
function log1out() {
	let tlogo = document.getElementById('t1');
	let flogo = document.getElementById('l2');
	let img = "email.png";
	tlogo.style.color = "black";
	flogo.src = img;
}

// function log2() {
// 	let flogo = document.getElementById('fb');
// 	let img = "fb1.png";
// 	flogo.src = img;
// }
// function log2out() {
// 	let flogo = document.getElementById('fb');
// 	let img = "fb.png";
// 	flogo.src = img;
// }

// function log3() {
// 	let flogo = document.getElementById('tw');
// 	let img = "twitter1.png";
// 	flogo.src = img;
// }
// function log3out() {
// 	let flogo = document.getElementById('tw');
// 	let img = "twitter.png";
// 	flogo.src = img;
// }
// function log4() {
// 	let flogo = document.getElementById('yo');
// 	let img = "youtube1.png";
// 	flogo.src = img;
// }
// function log4out() {
// 	let flogo = document.getElementById('yo');
// 	let img = "youtube.png";
// 	flogo.src = img;
// }


// let backgroundimg = document.getElementById('backgroundimg');
// let backgroundimgs = ["hotel0.jpg" , "hotel1.jgp" , "hotel2.jpg"];

// function imageslide() {
// 	for (i=0; i=backgroundimgs.length; i++) {
// 		backgroundimgs.src++;
// 	};
// }

let pref = document.getElementById('pref');
let shtob = document.getElementById('shtof');
let li = document.getElementById('li');

function text() {
	li.appendChild(document.createTextNode(pref.value));
	if (pref.value = 1) {
		pref.value = " ,";
	}
}

shtob.addEventListener("click", text);




let fotos = 0;
slides();

function slides() {
	let foto = document.getElementsByClassName("backgroundimg");
	for (i = 0; i < foto.length; i++) {
		foto[i].style.display = "none";
	}
	fotos++;
	if (fotos > foto.length) {fotos = 1};
	foto[fotos-1].style.display = "block";
	setTimeout(slides, 3000);
}