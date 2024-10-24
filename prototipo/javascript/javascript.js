/////////////////////////////////////
// tabs
//////////////////////////////////////

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);
    
    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);

/////////////////////////////////////////////
// carrossel
////////////////////////////////////////////////

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

function carousel() {
    idx++;

    if(idx > img.length - 1){
        idx = 0
    }

    img.style.transform = `translateX(${-idx *500}px)`
}

setInterval(carousel, 1800);