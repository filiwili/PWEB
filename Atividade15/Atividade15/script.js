function validar() {
    const elementos = document.nomeform.elements;
  
    const nome = elementos["nome"].value.trim();
    const email = elementos["email"].value.trim();
    const comentario = elementos["comentario"].value.trim();
    const visita = elementos["visita"].value;
  
    if (nome.length < 10) {
      alert("O nome deve conter pelo menos 10 caracteres.");
      return false;
    }
  
    if (comentario.length < 20) {
      alert("O comentário deve conter pelo menos 20 caracteres.");
      return false;
    }
  
    if (!document.querySelector('input[name="visita"]:checked')) {
      alert("Por favor, responda à pesquisa.");
      return false;
    }
  
    if (visita === "nao") {
      alert("Que bom que você voltou a visitar esta página!");
    } else {
      alert("Volte sempre à esta página!");
    }
  
    return true;
  }  