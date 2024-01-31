function sendEmail() {
  console.log("sendEmail function called");
  window.addEventListener("pageshow", function (event) {
    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var formData = new FormData(formulario);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", formulario.action, true);
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          formulario.reset();
          // Verificar si la solicitud fue exitosa (código de estado 200)
          if (xhr.status === 200) {
            // Mostrar ventana modal de éxito
            alert("¡Correo enviado correctamente!");
          } else {
            // Mostrar ventana modal de error
            alert(
              "Hubo un problema al enviar el correo. Inténtalo de nuevo más tarde."
            );
          }
        }
      };

      xhr.send(formData);
    });
  });
}

export default sendEmail;
