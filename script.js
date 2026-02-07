document.addEventListener('DOMContentLoaded', () => {
  const dataInicio = new Date('2025-12-08T00:00:00').getTime();

  const atualizarContador = () => {
    const agora = new Date().getTime();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  };

function playNetflixIntro() {
  const intro = document.getElementById("netflix-intro");
  const logo = intro.querySelector(".logo");

  // Reset animação
  logo.style.animation = "none";
  logo.offsetHeight; // força reflow
  logo.style.animation = "";

  intro.classList.add("active");

  setTimeout(() => {
    intro.classList.remove("active");
  }, 3000);
}
  window.playNetflixIntro = playNetflixIntro;
  // tocar a intro automaticamente ao carregar o site
  try { playNetflixIntro(); } catch (e) { /* não bloquear se algo der errado */ }
  atualizarContador();
  setInterval(atualizarContador, 1000);

  if (typeof Swiper !== 'undefined') {
    const options = {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        600: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }
    };

    document.querySelectorAll('.swiper').forEach((el) => {
      new Swiper(el, options);
    });
  }

  const modal = document.getElementById('modalLista');
  const btnAbrir = document.getElementById('btnAbrir');
  const btnFechar = document.getElementById('btnFechar');
  const backdrop = document.getElementById('backdrop');
  const btnFecharModal = document.querySelector('.btn-fechar-modal');

  const abrirModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const fecharModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  btnAbrir.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
  backdrop.addEventListener('click', fecharModal);
  btnFecharModal.addEventListener('click', fecharModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      fecharModal();
    }
  });

const btnFavorito = document.getElementById('btnFavorito');

// animação épica "TE AMO"
function createTeAmoAnimation() {
  const teAmoTexts = [
    'TE AMO ❤️',
    '💖 TE AMO MUITO 💖',
    'EU TE AMO!',
    '❤️ MEU AMOR ❤️',
    'TE AMO PARA SEMPRE!',
    '💕 VOCÊ É TUDO 💕',
    'MEU CORAÇÃO É SEU!',
    '🥰 TE AMO DEMAIS 🥰'
  ];

  // Animação central principal
  const mainTeAmo = document.createElement('div');
  mainTeAmo.innerHTML = 'TE AMO ❤️';
  mainTeAmo.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; font-weight: bold; background: linear-gradient(45deg, #ff0040, #ffd700, #ff0040); background-size: 200% 200%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; z-index: 9999; pointer-events: none; animation: te-amo-main 4s ease-out forwards; text-shadow: 0 0 30px rgba(255, 0, 64, 0.8); filter: drop-shadow(0 0 20px rgba(255, 0, 64, 1));';
  document.body.appendChild(mainTeAmo);
  setTimeout(() => mainTeAmo.remove(), 4000);

  // Múltiplos "TE AMO" flutuantes
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const teAmo = document.createElement('div');
      const randomText = teAmoTexts[Math.floor(Math.random() * teAmoTexts.length)];
      teAmo.innerHTML = randomText;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      teAmo.style.cssText = `position: fixed; left: ${startX}px; top: ${startY}px; font-size: ${ (Math.random() * 2 + 1.5).toFixed(2) }rem; font-weight: bold; color: ${Math.random() > 0.5 ? '#ff0040' : '#ffd700'}; z-index: 9998; pointer-events: none; animation: te-amo-float 3s ease-out forwards; text-shadow: 0 0 15px rgba(255, 0, 64, 0.8); filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6));`;
      document.body.appendChild(teAmo);
      setTimeout(() => teAmo.remove(), 3000);
    }, i * 200);
  }

  // Chuva de "TE AMO" pequenos
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const miniTeAmo = document.createElement('div');
      miniTeAmo.innerHTML = '💖 TE AMO';
      miniTeAmo.style.cssText = `position: fixed; left: ${Math.random() * 100}%; top: -50px; font-size: 1.2rem; color: #ff0040; z-index: 9997; pointer-events: none; animation: te-amo-rain ${ (Math.random() * 3 + 2).toFixed(2) }s linear forwards; text-shadow: 0 0 10px rgba(255, 0, 64, 0.6);`;
      document.body.appendChild(miniTeAmo);
      setTimeout(() => miniTeAmo.remove(), 5000);
    }, i * 150);
  }

  // Efeito de pulso na tela
  const pulseOverlay = document.createElement('div');
  pulseOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255, 0, 64, 0.1), transparent); z-index: 9996; pointer-events: none; animation: love-pulse 2s ease-in-out;';
  document.body.appendChild(pulseOverlay);
  setTimeout(() => pulseOverlay.remove(), 2000);
}

// Explosão de corações vermelhos
function createHeartExplosion() {
  const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝', '♥️', '💘'];
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-explosion';
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * window.innerHeight + 'px';
      heart.style.color = Math.random() > 0.5 ? '#ff0040' : '#ffd700';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 2000);
    }, i * 100);
  }
}

if (btnFavorito) {
  btnFavorito.addEventListener('click', () => {
    createTeAmoAnimation();
    createHeartExplosion();

    // efeito visual no botão
    btnFavorito.classList.add('ativo');
    setTimeout(() => btnFavorito.classList.remove('ativo'), 600);
  });
}

const btnContinuar = document.querySelector('.botoes button');
const overlay = document.getElementById('overlay-continuar');
const mediaContainer = document.getElementById('media-container');

const mediaSequencia = [
  { type: 'image', src: '1.jpeg' },
  { type: 'image', src: '2.jpeg' },
];
function iniciarSequencia() {
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  let index = 0;

  function mostrarMidia() {
    mediaContainer.innerHTML = '';

    // acabou a sequência
    if (index >= mediaSequencia.length) {
      finalizarSequencia();
      return;
    }

    const item = mediaSequencia[index];

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.style.opacity = '0';
      img.style.transition = 'opacity 1s';

      mediaContainer.appendChild(img);

      setTimeout(() => img.style.opacity = '1', 100);

      setTimeout(() => {
        index++;
        mostrarMidia();
      }, 3000);
    }

    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.autoplay = true;
      video.playsInline = true;
      video.muted = false;
      video.controls = false;

      video.onended = () => {
        index++;
        mostrarMidia();
      };

      mediaContainer.appendChild(video);
    }
  }

  function finalizarSequencia() {
    mediaContainer.innerHTML = `
      <p style="
        font-family: 'Great Vibes', cursive;
        font-size: 26px;
        margin-top: 40px;
        color: #fff;
        animation: fadeInText 2s ease forwards;
      ">
        Esse é só mais um episódio
        e eu quero todas as próximas temporadas com você 
      </p>
    `;

    // fecha sozinho depois de alguns segundos
    setTimeout(() => {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
      mediaContainer.innerHTML = '';
    }, 6000);
  }

  // espera o texto inicial
  setTimeout(mostrarMidia, 2500);
}
btnContinuar.addEventListener('click', iniciarSequencia);
});

