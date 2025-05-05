const imagem = document.getElementById("janela");
const statusTexto = document.getElementById("statusTexto");

let quebrada = false;

imagem.addEventListener("mouseover", () => {
  if (!quebrada) {
    imagem.src = "janela_aberta.jpg";
    statusTexto.textContent = "Janela Aberta";
  }
});

imagem.addEventListener("mouseout", () => {
  if (!quebrada) {
    imagem.src = "janela_fechada.jpg";
    statusTexto.textContent = "Janela Fechada";
  }
});

imagem.addEventListener("click", () => {
  imagem.src = "janela_quebrada.jpg";
  statusTexto.textContent = "Janela Quebrada";
  quebrada = true;
});
