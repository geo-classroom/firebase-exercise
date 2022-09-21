// Get btns
const loginBtn = document.querySelector("#login-btn")
const logoutBtn = document.querySelector("#logout-btn")
const usernameDiv = document.querySelector("#username")

// Leaflet set up
const map = L.map("map").setView([-25.754, 28.229], 18)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "© OpenStreetMap"
}).addTo(map)

// Work some magic
