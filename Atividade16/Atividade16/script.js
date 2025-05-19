const cursosLinks = {
    ads: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/analise-e-desenvolvimento-de-sistemas/",
    biomedicos: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/sistemas-biomedicos/",
    eletronica: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/eletronica-automotiva/",
    fabricacao: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/fabricacao-mecanica/",
    gestao: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/gestao-empresarial/",
    ams: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/desenvolvimento-de-sistemas-ams/"
  };
  
  const nomesCursos = {
    ads: "Análise e Desenvolvimento de Sistemas",
    biomedicos: "Sistemas Biomédicos",
    eletronica: "Eletrônica Automotiva",
    fabricacao: "Fabricação Mecânica",
    gestao: "Gestão Empresarial",
    ams: "Desenvolvimento de Sistemas - AMS"
  };
  
  document.getElementById("cursoSelect").onchange = function () {
    const valor = this.value;
  
    if (!valor) return;
  
    const nomeCurso = nomesCursos[valor];
    const url = cursosLinks[valor];
  
    const confirmar = confirm(`Deseja abrir a página oficial do curso de ${nomeCurso}?`);
  
    if (confirmar) {
      window.open(url, "_blank");
    }
  };
  