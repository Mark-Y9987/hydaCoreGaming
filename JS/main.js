var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function () {
    slideout.toggle();
});

function close(eve) {
    eve.preventDefault();
    slideout.close();
}

slideout
    .on('beforeopen', function () {
        this.panel.classList.add('panel-open');
    })
    .on('open', function () {
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function () {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
    });

$(document).ready(function () {
    $('.single-item').slick({});

});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});