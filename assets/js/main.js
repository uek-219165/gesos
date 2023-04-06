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

const footerTime = document.querySelector("#footer-time");
const map = document.querySelector("#frame");
footerTime.textContent = new Date().getFullYear();

if (map) {
	let url = "";

	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};

	function success(pos) {
		const crd = pos.coords;
		const lat = crd.latitude;
		const lon = crd.longitude;

		console.log("Your current position is:");
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);

		url = `https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}&amp;layer=mapnik`;
		map.setAttribute("src", url);
	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);
}

if (sosBtn) {
	
}
