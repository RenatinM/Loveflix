document.addEventListener('DOMContentLoaded', () => {
  

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

  // Controle da Modal
  const modal = document.getElementById('modalLista');
  const btnAbrir = document.getElementById('btnAbrir');
  const btnFechar = document.getElementById('btnFechar');
  const backdrop = document.getElementById('backdrop');
  const btnFecharModal = document.querySelector('.btn-fechar-modal');

  // Função para abrir modal
  const abrirModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Função para fechar modal
  const fecharModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // Event listeners
  btnAbrir.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
  backdrop.addEventListener('click', fecharModal);
  btnFecharModal.addEventListener('click', fecharModal);

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      fecharModal();
    }
  });
});
