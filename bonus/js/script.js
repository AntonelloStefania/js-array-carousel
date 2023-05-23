//array immagini
let imgs = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]


let img_container = document.querySelector('.img-container');
let slide ="";
let thumbnails_container = document.querySelector('.thumbnails-container');
let thumbnails = '';

//ciclo for per le immagini
for(let i=0; i < imgs.length; i++){
    let current_img = `<img src="./img/${imgs[i]}" alt="">`;
    slide += `<div class="slide"> ${current_img} </div>`;
    thumbnails += `<div class="thumbnails-cards"> ${current_img}</div>`;
}

img_container.innerHTML = slide;
thumbnails_container.innerHTML = thumbnails;
let active_slide = 0;
let opacity_thumbnail = 0;
let all_slides = document.getElementsByClassName('slide');
let all_thumbnails = document.getElementsByClassName('thumbnails-cards');
all_thumbnails[opacity_thumbnail].classList.add('opacity');
all_slides[active_slide].classList.add('active');

//variabili associazione pulsanti
let prev_btn = document.querySelector("#prev-button");
let next_btn = document.querySelector("#next-button");

//pulsante per andare avanti
next_btn.addEventListener('click', function(){
        
        //immagini principali
        all_slides[active_slide].classList.remove('active');
        active_slide = (active_slide + 1) % imgs.length ;
        all_slides[active_slide].classList.add('active');
        
        //immagini thumbnails
        all_thumbnails[opacity_thumbnail].classList.remove('opacity');
        opacity_thumbnail = (opacity_thumbnail + 1) % imgs.length ;
        all_thumbnails[opacity_thumbnail].classList.add('opacity');
})

//Pulsante per tornare indietro

prev_btn.addEventListener('click', function(){
        
        //immagini principali
        all_slides[active_slide].classList.remove('active');
        active_slide=(active_slide -1 + imgs.length) % imgs.length;
        all_slides[active_slide].classList.add('active');
        
        //immagini thumbnails
        all_thumbnails[opacity_thumbnail].classList.remove('opacity');
        opacity_thumbnail =(opacity_thumbnail -1 + imgs.length) % imgs.length;
        all_thumbnails[opacity_thumbnail].classList.add('opacity');
}) 
