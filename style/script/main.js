var menuIcon = document.querySelector('.menu-icon');

var menu = document.querySelector('.menu');

menuIcon.addEventListener('click',()=>{
  
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        document.querySelector('.menu-icon img').src = 'style/img/menu.png';
    }
    else{
        menu.classList.add('active');
        document.querySelector('.menu-icon img').src = 'style/img/close.png';
    }
}) 
