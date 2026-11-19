document.addEventListener('DOMContentLoaded', function() {

    const modalCarRental = document.getElementById('modal-car-rental');
    const modalKeepMeClean = document.getElementById('modal-keep-me-clean');
    const modalPineZoo = document.getElementById('modal-pine-zoo');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    function openModal(modalElement) {
        modalElement.classList.add('show');
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = '';
    }

    const btnCarRental = document.getElementById('btn-car-rental');
    const btnKeepMeClean = document.getElementById('btn-keep-me-clean');
    const btnPineZoo = document.getElementById('btn-pine-zoo');

    if(btnCarRental) {
        btnCarRental.addEventListener('click', () => openModal(modalCarRental));
    }
    
    if(btnKeepMeClean) {
        btnKeepMeClean.addEventListener('click', () => openModal(modalKeepMeClean));
    }
    if(btnPineZoo) {
        btnPineZoo.addEventListener('click', () => openModal(modalPineZoo));
    }

    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});