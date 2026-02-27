// Selecionando o botão via JS (Vamos usar ID "HyButton")

//const button = document.getElementById('myButton');
  const button = document.querySelector('#myButton');
// Selecionando o botão via JS (Vamos usar ID "MyText")
const text = document.getElementById('myText');

// Adicionando um "ouvinte" de evento para disparar uma ação
button[0].addEventListener('click', () => {
    // Troca o texto para "Olá, mundo!"
    text.textContent = 'Olá, Mundo!';
})



