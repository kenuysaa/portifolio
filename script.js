document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("bnt-menssager");
  const form = document.querySelector(".forms-menssager");

  btn.addEventListener("click", () => {
    if (form.style.display === "block") {
      form.style.display = "none";
      btn.textContent = "Mensagem";
    } else {
      form.style.display = "block";
      btn.textContent = "Fechar";
    }
  });
});
