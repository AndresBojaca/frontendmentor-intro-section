    const btnMenu = document.querySelector('#toggle-btn');
    const menu = document.querySelector('.navbar__nav');
    const dialog = document.querySelector('.navbar__collapsed-dialog');
    const submenu = document.querySelectorAll('.nav__item-buttondropdown');

    btnMenu.addEventListener('click', function(){

    /* Animation Sidebar */
        dialog.classList.toggle('show');
        if (!dialog.classList.contains('show')) {
            setTimeout(() => {
                dialog.classList.add('d-none');
            }, 400);
        }else{  dialog.classList.remove('d-none');  }
        menu.classList.toggle('collapsed');

        /* Change Image Button */
        let imgsrc = btnMenu.getAttribute('src');
        let newimgsrc = imgsrc == './assets/images/icon-menu.svg' ? './assets/images/icon-close-menu.svg' : './assets/images/icon-menu.svg';
        btnMenu.setAttribute('src', newimgsrc);
    });

    for (let i = 0; i < submenu.length; i++) {
        submenu[i].addEventListener('click', function(){
            if(window.innerWidth < 993){
                const submenu = this.nextElementSibling;
                const height = submenu.scrollHeight;
                console.log('click')
                if (submenu.classList.contains('toggled')) {
                    submenu.classList.remove('toggled');
                    submenu.removeAttribute('style');
                } else {
                    submenu.classList.add('toggled');
                    submenu.style.height = height + 'px';
                }
            }
        });
        
    }


