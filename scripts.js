const modaloverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for(let card of cards){
    card.addEventListener('click', function(){
        modaloverlay.classList.add('active')
        id = card.id;
        modaloverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${id}`;         
    });
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modaloverlay.classList.remove('active') 
    modaloverlay.querySelector("iframe").src = "";
})

