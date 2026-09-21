const themeButton = document.getElementById("themeButton");

function applyStoredTheme() {
    const stored = localStorage.getItem("theme");
 
    if (stored === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "☀️";
    }
}
 
applyStoredTheme();

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


function sayHello() {

    alert("Hey! 👋 Thanks for visiting my website!");

}
