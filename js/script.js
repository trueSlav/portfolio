document.addEventListener('DOMContentLoaded', (e) => {
    
    //Menu active

    const openBtn = document.querySelector('.hamburger__block'),
          closeBtn = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu'),
          overlay = document.querySelector('.menu__overlay'),
          menuItem = document.querySelectorAll('.menu__item');

    openBtn.addEventListener('click', e => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
    });

    function closeMenu(){
        menu.classList.remove('active');
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener('click', closeMenu);

    menuItem.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    overlay.addEventListener('click', e => {
        if(e.target === overlay){
            closeMenu();
        }
    });

    document.addEventListener('keydown', e => {
        if(e.code === 'Escape' && menu.classList.contains('active')){
            closeMenu();
        }
    });

    
    console.log('Hi');
});
