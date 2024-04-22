var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	speed: 800,
});

$("nav a").on("click", function (e) {
	if (this.hash !== "") {
		e.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		);
	}
});

const nextBtn = document.querySelectorAll("#next-btn");
const prevBtn = document.querySelectorAll("#prev-btn");
const pages = document.querySelectorAll(".page");
const progress = document.querySelectorAll(".progress-bar");
const showHidePass = document.querySelectorAll(".show-hide-pass");

let currentPage = 0;

function showCurrentPage(index) {
	pages.forEach((page, i) => {
		if (i == index) {
			page.classList.add("active");
		} else {
			page.classList.remove("active");
		}
	});

	progress.forEach((progressBar, i) => {
		if (i == index) {
			progressBar.classList.add("current");
		} else {
			progressBar.classList.remove("current");
		}
	});
}

function addProgress(index) {
	progress[index].classList.add("active");
}

function subProgress(index) {
	progress[index + 1].classList.remove("active");
}

function handleNext() {
	currentPage++;
	showCurrentPage(currentPage);
	addProgress(currentPage);
}

function handlePrev() {
	currentPage--;
	showCurrentPage(currentPage);
	subProgress(currentPage);
}

nextBtn.forEach((btn) => {
	btn.addEventListener("click", handleNext);
});

prevBtn.forEach((btn) => {
	btn.addEventListener("click", handlePrev);
});


