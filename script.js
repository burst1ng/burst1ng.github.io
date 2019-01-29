var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");
var allColor = document.querySelectorAll("input");

color1.value = "#fcccc7";
color2.value = "#9ec2bd";
css.innerText = "linear-gradient from " + color1.value + " to " + color2.value;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = "linear-gradient from " + color1.value + " to " + color2.value;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomInte255() {
	i = Math.floor(Math.random()*256);
	return i;
}

function randomRgbhex() {
	var hexColor = "";
	for (var i = 0; i < 3; i++) {
		intRed = randomInte255();
		if (intRed < 16) {
			hexRed = "0" + intRed.toString(16);
		} else {
			hexRed = Number(intRed).toString(16);
		}
		hexColor = hexColor.concat(hexRed);
	}
	return hexColor = "#" + hexColor;
}

function eachColor (item, i) {
	allColor[i].value = randomRgbhex();
}

function assignColor () {
	allColor.forEach(eachColor);
	setGradient();
}

btn.addEventListener("click", assignColor);