var slideout = new Slideout({
	panel: document.getElementById('panel'),
	menu: document.getElementById('menu'),
	padding: 256,
	tolerance: 70
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

$(function () {
	$('.rslides').responsiveSlides({
		auto: true,
		speed: 500,
		timeout: 7000,
		nav: false,
		pause: true
	});
});