function toggleDarkMode() {
    const body = document.body;
    const moonIcon = document.getElementById("moonIcon");

    // Toggle dark mode class
    body.classList.toggle("dark-mode");

    // Change icon based on mode
    if (body.classList.contains("dark-mode")) {
        moonIcon.classList.remove("fa-moon");
        moonIcon.classList.add("fa-sun");
    } else {
        moonIcon.classList.remove("fa-sun");
        moonIcon.classList.add("fa-moon");
    }
}
