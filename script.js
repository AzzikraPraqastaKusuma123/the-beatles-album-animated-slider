const slider = document.querySelector('.slider');
const list = document.querySelector('.list'); 
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


if (next && list && thumbnail && slider) {
    next.addEventListener('click', () => {
        initSlider('next');
    });

    const initSlider = (type) => {
        const sliderItems = list.querySelectorAll('.item'); 
        const thumbnailItems = thumbnail.querySelectorAll('.item');

        if (type === 'next' && sliderItems.length > 0 && thumbnailItems.length > 0) {
            list.appendChild(sliderItems[0]); 
            thumbnail.appendChild(thumbnailItems[0]);
            slider.classList.add('next');
        }

        setTimeout(() => {
            slider.classList.remove('next');
        }, 2000);
    };
}
