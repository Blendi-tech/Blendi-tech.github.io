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