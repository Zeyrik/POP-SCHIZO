window.addEventListener('click', function (event) { 
   const nav = document.querySelector('ul'),
   navLinks = document.querySelectorAll('a'),
   btn = document.querySelector('.button-switch'),
   scrollHidden = document.querySelector('body');
   if (event.target.dataset.btn === 'close') {
    btn.setAttribute('name', 'close');
    nav.classList.toggle('translate-x-full');
    scrollHidden.classList.toggle('overflow-hidden');
}

for (let link of navLinks) {
    if (event.target === link) {
        btn.setAttribute('name', 'menu');
        nav.classList.remove('translate-x-full');
        scrollHidden.classList.remove('overflow-hidden');
    }
}

if (nav.classList.contains("translate-x-full") === false) {
    btn.setAttribute('name', 'menu');
}


})