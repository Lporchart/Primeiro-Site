const modaloverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');


for(let card of cards){
    card.addEventListener('click', function(){
        modaloverlay.classList.add('active')
        id = card.id;
        modaloverlay.querySelector("iframe").src = `${id}`;         
    });
}


document.querySelector('.close-modal').addEventListener("click", function(){
    modaloverlay.classList.remove('active') 
    modal.classList.remove('active') 
    modaloverlay.querySelector("iframe").src = "";
});
document.querySelector('.maximize-modal').addEventListener("click", function(){
    modal.classList.add('active')
});

