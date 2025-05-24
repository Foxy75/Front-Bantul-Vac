// Define navLinks by selecting all navigation links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        // Assuming the href attribute always starts with a '#', otherwise handle accordingly
        const href = this.getAttribute("href");
        const targetId = href.startsWith("#") ? href.substring(1) : "";


sections.forEach(section => {

    if (section.id === targetId) {

        section.classList.add("visible");
        section.classList.remove("hidden");

    } else {

        section.classList.add("hidden");
        section.classList.remove("visible");

    }

});

});




sections.forEach(section => {

    if (section.id !== "home") {
        section.classList.add("hidden");
        section.classList.remove("visible");
    } 
    else {
        section.classList.add("visible");
        section.classList.remove("hidden");
    }

});
});