// MENU MOBILE----------------------------------------------------------
const btnMobileImg = document.getElementById('btnMobile');

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    // toggle: adicione caso não tenha, remova caso tenha
    nav.classList.toggle('active');
}
btnMobileImg.addEventListener('click', toggleMenu);


// TROCA DE PREÇOS------------------------------------------------------
const box = document.querySelector('.checkbox')
const price1 = document.querySelector('.price1')
const price2 = document.querySelector('.price2')
const price3 = document.querySelector('.price3')
const mes1 = document.querySelector('.mes1')
const mes2 = document.querySelector('.mes2')
const mes3 = document.querySelector('.mes3')
const ano = document.querySelector('#ano')
const mes = document.querySelector('#mes')

box.addEventListener('click', () => {
    if (box.checked) {
        price1.innerText = '$48'
        price2.innerText = '$144'
        price3.innerText = '$84'

        mes1.innerText = '/yr'
        mes2.innerText = '/yr'
        mes3.innerText = '/yr'

        ano.style.fontWeight = 'bold'
        mes.style.fontWeight = 'normal'
    } else {
        price1.innerText = '$4'
        price2.innerText = '$12'
        price3.innerText = '$7'

        mes1.innerText = '/mo'
        mes2.innerText = '/mo'
        mes3.innerText = '/mo'


        ano.style.fontWeight = 'normal'
        mes.style.fontWeight = 'bold'
    }
})