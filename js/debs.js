const dataInicial = new Date(2025, 2, 15, 16, 27, 0);
const dataInicial2 = new Date(2025, 1, 15, 22, 15, 0);

function atualizarContador(data, elementoId) {
    const agora = new Date();
    const diferenca = agora - data;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const texto = `${dias}d ${horas}h ${minutos}m`;
    document.getElementById(elementoId).textContent = texto;
}

setInterval(() => {
    atualizarContador(dataInicial, 'contador');
    atualizarContador(dataInicial2, 'contador2');
}, 1000);

atualizarContador(dataInicial, 'contador');
atualizarContador(dataInicial2, 'contador2');

document.addEventListener('mousemove', function(e) {
    const blurCursor = document.getElementById('blurCursor');
    if (blurCursor) {
        blurCursor.style.left = `${e.clientX}px`;
        blurCursor.style.top = `${e.clientY}px`;
    }
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);
    setTimeout(() => {
        dot.remove();
    }, 1000);
});

  const slider = document.querySelector('.image-slider');
  const images = document.querySelectorAll('.slider-image');
  const imageCount = images.length;
  const imageWidth = images[0].clientWidth;

  let index = 0;

  function slideNext() {
    index++;
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = `translateX(-${index * imageWidth}px)`;
    if (index === imageCount - 1) {
      setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        index = 0;
      }, 1000);
    }
  }
  setInterval(slideNext, 3000);

  const hora1 = new Date("2025-05-17T02:11:00");

  const hora2 = new Date("2025-05-17T10:01:00");

  function verificarMensagens() {
    const agora = new Date();

    if (agora >= hora1) {
      document.getElementById('mensagem1').style.display = 'block';
    }

    if (agora >= hora2) {
      document.getElementById('mensagem2').style.display = 'block';
    }
  }

  verificarMensagens();

  const intervalo = setInterval(() => {
    verificarMensagens();
    const agora = new Date();
    if (agora >= hora1 && agora >= hora2) {
      clearInterval(intervalo);
    }
  }, 1000);
