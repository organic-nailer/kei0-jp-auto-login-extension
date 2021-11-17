console.log("Hello");

var timerId = 0;

timerId = setInterval(() => {
	console.log("in Interval");
	const loginNav = document.getElementById("global_nav_login_link");
	if (loginNav) {
	    console.log("login_canvas.js: loginNav found");
	    window.location.href = "https://lms.keio.jp/login/saml";
	}
	const accountNav = document.getElementById("global_nav_profile_link");
	if(accountNav) {
		clearInterval(timerId);
	}
}, 500);