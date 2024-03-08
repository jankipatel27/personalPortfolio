
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
	for(tablink of tablinks){
		tablink.classList.remove("active-link")
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab")
	}
	event.currentTarget.classList.add("active-link")
	document.getElementById(tabname).classList.add("active-tab")
}
var sidemenu = document.getElementById("sidemenu")

function openenu() {
	sidemenu.style.right = "0"
}

function closenenu() {
	sidemenu.style.right = "-200px"
}