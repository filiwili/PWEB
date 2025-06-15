let livros = JSON.parse(localStorage.getItem('livros')) || [];

function getParam(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}

function salvarLivro(livro) {
  const index = livros.findIndex(l => l.id === livro.id);
  if (index >= 0) {
    livros[index] = livro;
  } else {
    livro.id = Date.now();
    livros.push(livro);
  }
  localStorage.setItem('livros', JSON.stringify(livros));
}

function excluirLivro(id) {
  livros = livros.filter(l => l.id !== id);
  localStorage.setItem('livros', JSON.stringify(livros));
}

function buscarLivro(id) {
  return livros.find(l => l.id === id);
}

function listarLivros() {
  return livros;
}

function renderizarLista(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  listarLivros().forEach(livro => {
    const capa = livro.imagem && livro.imagem.startsWith('data:image') ? livro.imagem : '../img/capa-padrao.png';

    const div = document.createElement('div');
    div.classList.add('book-item');
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:50px;height:60px;background:#eee;overflow:hidden;flex-shrink:0;">
          <img src="${capa}" alt="Capa" style="height:100%;object-fit:cover;">
        </div>
        <div>
          <strong>${livro.titulo}</strong><br>
          <small>${livro.autor}</small><br>
          <span style="color:#f5b50a">&#9733; ${livro.notaUsuario}</span>
        </div>
      </div>
      <div>
        <button onclick="window.location.href='sobre.html?id=${livro.id}'">Ver</button>
        <button onclick="excluirLivroPrompt(${livro.id})" style="background:#c62828;color:#fff;">Excluir</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function excluirLivroPrompt(id) {
  if (confirm('Deseja excluir este livro?')) {
    excluirLivro(id);
    renderizarLista('listaLivros');
  }
}

function configurarFormularioLivro() {
  const form = document.getElementById('formLivro');
  const id = getParam('id');
  const livroExistente = id ? buscarLivro(Number(id)) : null;

  if (livroExistente) {
    document.getElementById('tituloForm').innerText = 'Editar Livro';

    for (const chave in livroExistente) {
      if (chave === 'imagem') continue;
      if (form.elements[chave]) {
        form.elements[chave].value = livroExistente[chave];
      }
    }

    if (livroExistente.imagem) {
      const imgPreview = document.createElement('img');
      imgPreview.src = livroExistente.imagem;
      imgPreview.style.maxWidth = '100px';
      imgPreview.style.display = 'block';
      form.querySelector('#imagem').insertAdjacentElement('afterend', imgPreview);
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const livro = {};
    let valido = true;
    let mensagemErro = '';

    [...form.elements].forEach((campo) => {
      if (!campo.name || campo.type === 'file') return;

      let valor = campo.type === 'number' ? Number(campo.value) : campo.value.trim();
      livro[campo.name] = valor;

      if ((campo.name === 'titulo' || campo.name === 'autor') && !valor) {
        valido = false;
        mensagemErro += `- O campo "${campo.placeholder}" é obrigatório.\n`;
      }

      if (campo.name === 'anoPublicacao') {
        const anoAtual = new Date().getFullYear();
        if (!valor || valor < 1000 || valor > anoAtual) {
          valido = false;
          mensagemErro += `- O "Ano de Publicação" deve estar entre 1000 e ${anoAtual}.\n`;
        }
      }

      if (campo.name === 'paginas' && valor < 0) {
        valido = false;
        mensagemErro += `- O número de páginas deve ser positivo.\n`;
      }

      if (campo.name === 'notaUsuario' && (valor < 0 || valor > 5)) {
        valido = false;
        mensagemErro += `- A nota deve estar entre 0 e 5.\n`;
      }
    });

    if (!valido) {
      alert('Corrija os seguintes erros antes de continuar:\n\n' + mensagemErro);
      return;
    }

    if (id) {
      livro.id = Number(id);
    } else {
      livro.id = Date.now();
      livro.dataAdicao = new Date().toLocaleDateString('pt-BR');
    }

    const arquivo = document.getElementById('imagem').files[0];

    if (arquivo) {
      const reader = new FileReader();
      reader.onload = () => {
        livro.imagem = reader.result;
        salvarLivro(livro);
        window.location.href = 'meuslivros.html';
      };
      reader.readAsDataURL(arquivo);
    } else {
      if (livroExistente && livroExistente.imagem) {
        livro.imagem = livroExistente.imagem;
      } else {
        livro.imagem = '';
      }

      salvarLivro(livro);
      window.location.href = 'meuslivros.html';
    }
  });
}

function carregarDetalhesLivro() {
  const id = getParam('id');
  const livro = buscarLivro(Number(id));
  const c = document.getElementById('detalhesLivro');

  if (!livro) {
    c.innerHTML = '<p>Livro não encontrado.</p>';
  } else {
    c.innerHTML = `
      <h2>${livro.titulo}</h2>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p><strong>Ano:</strong> ${livro.anoPublicacao}</p>
      <p><strong>Gênero:</strong> ${livro.genero}</p>
      <p><strong>Editora:</strong> ${livro.editora}</p>
      <p><strong>Páginas:</strong> ${livro.paginas}</p>
      <p><strong>Idioma:</strong> ${livro.idiomaOriginal}</p>
      <p><strong>ISBN:</strong> ${livro.isbn}</p>
      <p><strong>Nota:</strong> ${livro.notaUsuario}</p>
      <p><strong>Data de Adição:</strong> ${livro.dataAdicao}</p>
      <p><strong>Sinopse:</strong><br>${livro.sinopse}</p>
      <div class="buttons">
        <button onclick="window.location.href='meuslivros.html'">Voltar</button>
        <button onclick="window.location.href='adicionar.html?id=${livro.id}'">Editar</button>
      </div>
    `;
  }
}
