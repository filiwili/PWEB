function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let notas = [];
    
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i}:`));
        notas.push(nota);
    }
    
    let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    alert(`${nome}, sua média é ${media.toFixed(2)}`);
}