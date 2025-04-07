const form = document.getElementById("form");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");
const encerrarBtn = document.getElementById("encerrar");

let respostas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  respostas.push({ idade, sexo, opiniao });

  form.reset();
  contador.textContent = `Respostas registradas: ${respostas.length}`;
});

encerrarBtn.addEventListener("click", function () {
  if (respostas.length === 0) {
    resultado.innerHTML = "<p>Nenhuma resposta registrada ainda.</p>";
    return;
  }

  exibirResultados();
});

function exibirResultados() {
  const idades = respostas.map(p => p.idade);
  const mediaIdade = (idades.reduce((a, b) => a + b, 0) / respostas.length).toFixed(2);
  const maisVelho = Math.max(...idades);
  const maisNovo = Math.min(...idades);
  const pessimoCount = respostas.filter(p => p.opiniao === 1).length;
  const otimoBomCount = respostas.filter(p => p.opiniao === 3 || p.opiniao === 4).length;
  const porcentagemOtimoBom = ((otimoBomCount / respostas.length) * 100).toFixed(2);

  const sexoCount = {
    Feminino: 0,
    Masculino: 0,
    Outros: 0
  };

  respostas.forEach(p => {
    sexoCount[p.sexo]++;
  });

  resultado.innerHTML = `
    <p><strong>Média de idade:</strong> ${mediaIdade}</p>
    <p><strong>Idade da pessoa mais velha:</strong> ${maisVelho}</p>
    <p><strong>Idade da pessoa mais nova:</strong> ${maisNovo}</p>
    <p><strong>Quantidade de pessoas que responderam Péssimo:</strong> ${pessimoCount}</p>
    <p><strong>Porcentagem de pessoas que responderam Ótimo ou Bom:</strong> ${porcentagemOtimoBom}%</p>
    <p><strong>Mulheres:</strong> ${sexoCount.Feminino}, <strong>Homens:</strong> ${sexoCount.Masculino}, <strong>Outros:</strong> ${sexoCount.Outros}</p>
  `;
}
