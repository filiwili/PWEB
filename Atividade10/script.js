document.getElementById("imcForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");
  
    if (altura > 0 && peso > 0) {
      const imc = calcularIMC(peso, altura);
      const classificacao = classificarIMC(imc);
  
      resultado.innerHTML = `
        Seu IMC é: <strong>${imc.toFixed(2)}</strong><br>
        Classificação: <strong>${classificacao.nome}</strong><br>
        Obesidade (Grau): <strong>${classificacao.grau}</strong>
      `;
    } else {
      resultado.textContent = "Por favor, insira valores válidos.";
    }
  });
  
  function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  function classificarIMC(imc) {
    if (imc < 18.5) {
      return { nome: "MAGREZA", grau: "0" };
    } else if (imc < 25) {
      return { nome: "NORMAL", grau: "0" };
    } else if (imc < 30) {
      return { nome: "SOBREPESO", grau: "I" };
    } else if (imc < 40) {
      return { nome: "OBESIDADE", grau: "II" };
    } else {
      return { nome: "OBESIDADE GRAVE", grau: "III" };
    }
  }
  