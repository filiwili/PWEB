function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
  }
  
  function mostrarMaior() {
    const a = Number(document.getElementById("n1").value);
    const b = Number(document.getElementById("n2").value);
    const c = Number(document.getElementById("n3").value);
  
    const maior = maiorNumero(a, b, c);
    document.getElementById("resMaior").textContent = `Maior número: ${maior}`;
  }
  
  function ordenarCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
  }
  
  function mostrarCrescente() {
    const a = Number(document.getElementById("c1").value);
    const b = Number(document.getElementById("c2").value);
    const c = Number(document.getElementById("c3").value);
  
    const ordenado = ordenarCrescente(a, b, c);
    document.getElementById("resCrescente").textContent = `Ordem crescente: ${ordenado.join(", ")}`;
  }
  
  function ehPalindromo(palavra) {
    const maiuscula = palavra.toUpperCase();
    const reversa = maiuscula.split('').reverse().join('');
    return maiuscula === reversa;
  }
  
  function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const resultado = ehPalindromo(palavra)
      ? "É um palíndromo!"
      : "Não é um palíndromo.";
    document.getElementById("resPalindromo").textContent = resultado;
  }
  
  function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) return "Equilátero";
      if (a === b || a === c || b === c) return "Isósceles";
      return "Escaleno";
    } else {
      return "Não forma um triângulo";
    }
  }
  
  function verificarTriangulo() {
    const a = Number(document.getElementById("t1").value);
    const b = Number(document.getElementById("t2").value);
    const c = Number(document.getElementById("t3").value);
  
    const tipo = tipoTriangulo(a, b, c);
    document.getElementById("resTriangulo").textContent = `Resultado: ${tipo}`;
  }
  