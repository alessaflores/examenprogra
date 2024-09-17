

//Toggle
//Constantes toggle titles
const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')
const toggleReviews = document.querySelector('.title-reviews')

//Constantes Contenido Texto
const contentDescription = document.querySelector('.text-description')
const contentAdditionalInformation = document.querySelector('.text-additional-information')
const contentReviews = document.querySelector('.text-reviews')

//funciones toggle
toggleDescription.addEventListener('click', () =>{
    contentDescription.classList.toggle('hidden');
});
toggleAdditionalInformation.addEventListener('click', () =>{
    contentAdditionalInformation.classList.toggle('hidden');
});
toggleReviews.addEventListener('click', () =>{
    contentReviews.classList.toggle('hidden');
});
