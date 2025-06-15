const updateTime = () => {
    let timeHeading = document.querySelector(".time-heading");
    let date = new Date();
    let timeString = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    });
    timeHeading.innerHTML = timeString;
}

const updateDate = () => {
    let dateHeading = document.querySelector(".date-heading");
    let date = new Date();
    let dateString = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric"
    });
    dateHeading.innerHTML = dateString;
}

updateTime();
setInterval(updateTime, 1000);
updateDate();

window.addEventListener("DOMContentLoaded", () => {
    const saveTheme = localStorage.getItem("theme");
    const saveIcon = localStorage.getItem("icon");
    if (saveTheme === "light") {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.add("dark-theme");
    }
    const icon = document.getElementById("icon");
    if (saveIcon === "fa-sun") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
})

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    const icon = document.getElementById("icon");
    const isDark = document.body.classList.toggle("dark-theme");
    if (isDark) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("icon", "fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
        localStorage.setItem("icon", "fa-moon");
    }
})