// Smooth scroll manual ke anchor target
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");

  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetID = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // offset dari atas (biar ga ketutup navbar)
          behavior: "smooth"
        });
      }
    });
  }
});
