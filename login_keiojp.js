const userId = "[your email]";
const password = "[your password]";

window.addEventListener("load", () => {
	const loginForm = document.getElementById("login");
	const usernameForm = document.getElementById("username");
	const passwordForm = document.getElementById("password");
	usernameForm.value = userId;
	passwordForm.value = password;
	const loginButtons = loginForm.getElementsByClassName("form-button");
	if(loginButtons.length > 0) {
		loginButtons[0].click();
	}
});
