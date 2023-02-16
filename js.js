// Selecionando todos os elementos de classe 'titulo-card' e modificando o texto
document.querySelectorAll('.titulo-card').forEach((element) => {
    element.textContent = 'Meu card';
  });
  
  // Selecionando todos os elementos de classe 'descricao-card' e modificando o texto
  document.querySelectorAll('.descricao-card').forEach((element) => {
    element.textContent = 'Descrição modificada pelo JavaScript';
  });
  
  // Selecionando todos os elementos de classe 'botao-editar' e adicionando o atributo 'onclick'
  document.querySelectorAll('.botao-editar').forEach((element) => {
    element.setAttribute('onclick', 'editarCard()');
  });
  
  // Função que será chamada ao clicar no botão editar
  function editarCard() {
    alert('Clicou em Editar!');
  }
  
  // Selecionando todos os elementos de classe 'botao-apagar' e adicionando o atributo 'onclick'
  document.querySelectorAll('.botao-apagar').forEach((element) => {
    element.setAttribute('onclick', 'apagarCard()');
  });
  
  // Função que será chamada ao clicar no botão apagar
  function apagarCard() {
    if (confirm('Tem certeza que deseja apagar o card?')) {
      alert('Confirmado!');
    } else {
      alert('Cancelou!');
    }
  }
  