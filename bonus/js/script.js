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

//ciclo for per le immagini
for(let i=0; i < imgs.length; i++){
    let current_img = `<img src="./img/${imgs[i]}" alt="">`
    slide += `<div class="slide">
                 ${current_img}
            </div>`
}

img_container.innerHTML = slide
let active_slide = 0;
let all_slides = document.getElementsByClassName('slide')
all_slides[active_slide].classList.add('active');

//variabili associazione pulsanti
let prev_btn = document.querySelector("#prev-button");
let next_btn = document.querySelector("#next-button");

//pulsante per andare avanti
next_btn.addEventListener('click', function(){
    
        all_slides[active_slide].classList.remove('active');
        active_slide = (active_slide + 1) % imgs.length ;
        all_slides[active_slide].classList.add('active');
 
   
})

//Pulsante per tornare indietro

prev_btn.addEventListener('click', function(){
    
        all_slides[active_slide].classList.remove('active');
        active_slide=(active_slide -1 + imgs.length) % imgs.length;
        all_slides[active_slide].classList.add('active');
    
})
