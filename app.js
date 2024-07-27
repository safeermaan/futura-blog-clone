const form = document.querySelector('#mc-embedded-subscribe-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateEmail();
});

function validateEmail() {
    const input = document.querySelector('#mce-EMAIL');
    const email = input.value;
    const msg = document.querySelector('#message');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) {
        msg.innerText = 'Submitted';
        msg.style.color = 'green';
    } else {
        msg.innerText = 'Invalid email address';
        msg.style.color = 'red';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const marqueeWrapper = document.querySelector('.marquee-top__wrapper');
    const marqueeText = document.querySelector('.item-link');
    let offset = marqueeWrapper.offsetWidth;

    function animateMarquee() {
        offset -= 1.4;
        if (offset <= -marqueeText.offsetWidth) {
            offset = marqueeWrapper.offsetWidth;
        }
        marqueeWrapper.style.transform = `translate3d(${offset}px, 0, 0)`;
        requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
});
