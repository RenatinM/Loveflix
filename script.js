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
})
