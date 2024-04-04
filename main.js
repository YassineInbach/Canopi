const productContainers = document.querySelectorAll('.swiper-card');
const nxtBtn = document.querySelectorAll('.next-btn');
const preBtn = document.querySelectorAll('.prev-btn');
const swiperBtns = document.querySelectorAll('.swiper-btn button');

productContainers.forEach((item, i) => {
    const images = item.querySelectorAll('.swiper-img');
    const imageWidth = images[0].offsetWidth;

    nxtBtn[i].addEventListener('click', () => {
        const scrollAmount = item.scrollLeft + imageWidth;
        item.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    preBtn[i].addEventListener('click', () => {
        const scrollAmount = item.scrollLeft - imageWidth;
        item.scrollTo({
            left: scrollAmount >= 0 ? scrollAmount : 0,
            behavior: 'smooth'
        });
    });

    swiperBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const direction = btn.classList.contains('next-btn') ? 1 : -1;
            const scrollAmount = item.scrollLeft + direction * imageWidth;
            item.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
});
