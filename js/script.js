let indexElemento=1;

const imgContainer = document.getElementById('contenitore-immagini');
const listImg =imgContainer.children;
console.log(listImg);

const btnNext= document.getElementById('next-button');
const btnPrev= document.getElementById('previous-button');

btnNext.addEventListener('click', function(){
    listImg[indexElemento].classList.remove('d-none');
    listImg[indexElemento].classList.add('d-block');
});
btnPrev.addEventListener('click', function(){
    listImg[indexElemento].classList.remove('d-block');
    listImg[indexElemento].classList.add('d-none');
});
