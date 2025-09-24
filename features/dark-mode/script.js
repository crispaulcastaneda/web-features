'use strict';

function initSite() {
    darkMode();
}

function darkMode() {
    const toggle = document.getElementById("toggle");
    let selectedTheme = localStorage.getItem("theme");

    // function to get the current theme from the DOM
    const currentTheme = () => {
        if (document.documentElement.classList.contains("dark-mode")) {
            return "dark";
        } else {
            return "light";
        }
    };

    // function to apply the specific theme to the DOM
    const applyTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("darkmode");
        } else {
            document.documentElement.classList.remove("darkmode");
        }
    };

    // Check saved theme or system preference or initial load
    const initializeTheme = () => {
        if (selectedTheme) {
            applyTheme(selectedTheme);
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            applyTheme("dark");
        }
    }

    // Function to handle the toggle
    const handleToggle = () => {
        document.documentElement.classList.toggle("darkmode");
        localStorage.setItem("theme", currentTheme());
    }

    // initialize the theme
    initializeTheme();
    toggle.addEventListener("click", handleToggle);

}

document.addEventListener("DOMContentLoaded", initSite);