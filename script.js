const carouselBelt = document.querySelector(".carousel-outer");

let carouselBeltMargin = -450;

const handleLeftButton = () => {
	if (carouselBeltMargin < 150) {
		carouselBeltMargin += 600;
		carouselBelt.style.marginLeft = `${carouselBeltMargin}px`;
	}
};

const handleRightButton = () => {
	if (carouselBeltMargin > -1050) {
		carouselBeltMargin -= 600;
		carouselBelt.style.marginLeft = `${carouselBeltMargin}px`;
	}
};

const carouselLeftBtn = document.getElementById("carouselLeftBtn");
carouselLeftBtn.addEventListener("click", handleLeftButton);

const carouselRightBtn = document.getElementById("carouselRightBtn");
carouselRightBtn.addEventListener("click", handleRightButton);

/* Accordion functionality  */
document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll(".accordion");

	accordionItems.forEach((item) => {
		const accordionButton = item.querySelector(".accordion-button");
		const content = item.querySelector(".accordion-content");

		item.addEventListener("click", function () {
			accordionItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem
						.querySelector(".accordion-content")
						.classList.remove("accordion-content-active");
					otherItem.querySelector(".accordion-button").innerHTML = "+";
				}
			});

			content.classList.toggle("accordion-content-active");

			if (content.classList.contains("accordion-content-active")) {
				accordionButton.innerHTML = "-";
			} else {
				accordionButton.innerHTML = "+";
			}
		});
	});
});
