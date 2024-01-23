function switchTheme() {
  document.addEventListener("DOMContentLoaded", function () {
    const swictherTheme = document.querySelector(".nav__check");
    const root = document.documentElement;

    if (root.getAttribute("data-theme") === "dark") {
      swictherTheme.checked = true;
    }

    function toggleTheme() {
      const setTheme = this.checked ? "dark" : "light";
      root.setAttribute("data-theme", setTheme);
      localStorage.setItem("theme", setTheme);

      // Cambiar el favicon según el tema seleccionado
      const faviconLink = document.querySelector('link[rel="shortcut icon"]');
      const faviconDarkLink = document.querySelector(
        'link[rel="shortcut icon"][media="(prefers-color-scheme: dark)"]'
      );

      if (setTheme === "dark" && faviconDarkLink) {
        faviconLink.href = faviconDarkLink.href;
      } else {
        faviconLink.href = "./assets/icons/favicon.png"; // Fallback para el modo claro
      }
    }

    swictherTheme.addEventListener("click", toggleTheme);
  });

  const storageTheme = localStorage.getItem("theme");
  const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const newTheme = storageTheme ?? systemColorScheme;

  document.documentElement.setAttribute("data-theme", newTheme);
}

export default switchTheme;
