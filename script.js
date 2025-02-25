let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel'); // Correction
let listItemDom = document.querySelector('.carousel .list'); // Correction
let thumbnailDom = document.querySelector('.carousel .thumbnail'); // Correction

nextDom.onclick = function(){
    showSlider('next');
};
prevDom.onclick = function(){
    showSlider('prev');
};

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (itemSlider.length === 0 || itemThumbnail.length === 0) {
        console.error("Aucun élément trouvé dans le carousel.");
        return;
    }

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}
