let index = 0;
let total = 0;

fetch('images.json')
    .then(res => res.json())
    .then(data => {
        const slides = document.getElementById('slides');
        total = data.images.length;

        data.images.forEach(src => {
            const slide = document.createElement('div');
            slide.className = 'slide';

            const img = document.createElement('img');
            img.src = src;
            img.loading = 'lazy';

            slide.appendChild(img);
            slides.appendChild(slide);
        });
    });

function update() {
    document.getElementById('slides')
        .style.transform = `translateX(-${index * 100}%)`;
}

function next() {
    index = (index + 1) % total;
    update();
}

function prev() {
    index = (index - 1 + total) % total;
    update();
}