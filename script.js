function toggleMenu() {
    var menu = document.querySelector(".menu-links");
    var icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var typed = new Typed("#headline", {
    strings: ["Software Engineer", "Problem-Solver"],
    loop: true,
    typeSpeed: 50,
    backSpeed:50,
    backDelay: 1500
  });