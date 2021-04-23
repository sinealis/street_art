const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const themeswitcher = document.querySelector(".theme-toggle-button");

toggle.addEventListener("click", () => {
	toggle.classList.toggle("active")
	navigation.classList.toggle("active")
})

themeswitcher.addEventListener("click", () => {
	document.body.classList.toggle("dark")
})
