const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🔳")) {
		main.style.background = "#363636";
		main.style.color = "#fff";
		modeButton.textContent = "🔲";
	} else {
		main.style.background = "#FCF7F8";
		main.style.color = "#000";
		modeButton.textContent = "🔳";
	}
});
