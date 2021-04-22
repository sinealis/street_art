const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
	toggle.classList.toggle("active")
	navigation.classList.toggle("active")
})

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
	document.body.classList.toggle("dark")
})