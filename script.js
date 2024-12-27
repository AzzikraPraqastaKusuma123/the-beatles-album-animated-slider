const slider = document.querySelector('.slider');
const list = document.querySelector('.list'); 
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

if (next && list && thumbnail && slider) {
    next.addEventListener('click', () => {
        initSlider('next');
    });

    prev.addEventListener('click', () => {
        initSlider('prev');
    });

    const initSlider = (type) => {
        const sliderItems = list.querySelectorAll('.item'); 
        const thumbnailItems = thumbnail.querySelectorAll('.item');

        if (type === 'next') {
            list.appendChild(sliderItems[0]); 
            thumbnail.appendChild(thumbnailItems[0]);
        } else if (type === 'prev') {
            list.prepend(sliderItems[sliderItems.length - 1]); 
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        }

        slider.classList.add(type);

        setTimeout(() => {
            slider.classList.remove(type);
        }, 2000);
    };
}
