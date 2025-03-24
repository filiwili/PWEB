function calcularOperacoes() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    
    
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Indefinida";
    let resto = num2 !== 0 ? num1 % num2 : "Indefinido";
    
    alert(`Resultados:\nSoma: ${soma}\nSubtração: ${subtracao}\nProduto: ${produto}\nDivisão: ${divisao}\nResto da divisão: ${resto}`);
}