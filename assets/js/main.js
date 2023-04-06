"use strict";

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("sw.js")
		.then((registration) => {
			console.log("SW Registred!");
			console.log(registration);
		})
		.catch((error) => {
			console.log("SW Registration Failed!");
			console.log(error);
		});
}

document.querySelector("#footer-time").textContent = new Date().getFullYear();
