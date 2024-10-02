
// menue responsive

document.querySelector(".bars-icon").addEventListener('click', () => {
  const bars = document.querySelector(".nav-menu");
  const icon = document.querySelector(".bars-icon");

  if (icon.classList.contains('fa-bars-staggered')) {
    icon.classList.remove('fa-bars-staggered');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars-staggered');
  }

  if (bars.style.left === '-100%' || bars.style.left === '') {
    bars.style.left = '0%';
  } else {
    bars.style.left = '-100%';
  }
});


// partners carasoul
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});


