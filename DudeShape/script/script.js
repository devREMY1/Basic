// 1️⃣ animation helpers
function show(el) {
	el.classList.remove('hidden');
	requestAnimationFrame(() => {
		el.classList.add('show');
	});
}

function hide(el) {
	el.classList.remove('show');
	setTimeout(() => {
		el.classList.add('hidden');
	}, 500);
}

// 2️⃣ swiper
const swiperInstance = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// 3️⃣ DOM
const moreBtn = document.querySelector('.popular__more');
const backBtn = document.querySelector('.popular__more-back');

const swiperEl = document.querySelector('.swiper');
const navEl = document.querySelector('.popular__navContainer');
const moreGrid = document.querySelector('.popular__more-card');

// 4️⃣ logic
moreBtn.addEventListener('click', () => {
	hide(swiperEl);
	hide(navEl);
	show(moreGrid);

	moreBtn.classList.add('hidden');
	backBtn.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
	hide(moreGrid);

	show(swiperEl);
	show(navEl);

	backBtn.classList.add('hidden');
	moreBtn.classList.remove('hidden');

	setTimeout(() => {
		swiperInstance.update();
	}, 500);
});

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const image = document.getElementById('furnitureImage');

// tabs switch
tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('active'));
		contents.forEach(c => c.classList.remove('active'));

		tab.classList.add('active');
		document
			.querySelector(`[data-content="${tab.dataset.tab}"]`)
			.classList.add('active');
	});
});

// buttons change image
document.querySelectorAll('.item').forEach(btn => {
	btn.addEventListener('click', () => {
		const parent = btn.closest('.tab-content');

		parent.querySelectorAll('.item').forEach(b => b.classList.remove('active'));

		btn.classList.add('active');

		// smooth image switch
		image.style.opacity = '0';
		image.style.transform = 'scale(0.97)';

		setTimeout(() => {
			image.src = btn.dataset.img;
			image.style.opacity = '1';
			image.style.transform = 'scale(1)';
		}, 300);
	});
});
