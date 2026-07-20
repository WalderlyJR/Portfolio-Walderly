document.addEventListener("DOMContentLoaded", () => {
  console.log("JS carregou");

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  console.log(menuToggle);
  console.log(mobileMenu);

  if (!menuToggle || !mobileMenu) {
    console.error("Elementos do menu não encontrados");
    return;
  }

  menuToggle.addEventListener("click", () => {
    console.log("Clicou no menu");

    mobileMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
});