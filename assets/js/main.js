window.onload = () => {
  const navbar = document.querySelector(".main-nav");
  const toggler = document.querySelector(".menu-toggle");
  const crYear = document.getElementById("cr-year");

  toggler.addEventListener("click", (event) => {
    navbar.classList.toggle('responsive')
  })


  crYear.innerHTML = new Date().getUTCFullYear();
}