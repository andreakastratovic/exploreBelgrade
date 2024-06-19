$(document).ready(function() {
  $('#autoWidth1').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
          $('#autoWidth1').removeClass('cS-hidden');
      }
  });
  $('#autoWidth2').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
          $('#autoWidth2').removeClass('cS-hidden');
      }
  });
});

// Smooth scrolling effect for links with hashes
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
              } else {
                  $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
              };
          });
      }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const attractions = {
      'st-sava-temple': {
          title: 'St. Sava Temple',
          description: 'St. Sava Temple is one of the largest Orthodox churches in the world.',
          imgSrc: 'assets/hram.jpg'
      },
      'kalemegdan': {
          title: 'Kalemegdan',
          description: 'Kalemegdan is the largest park and the most important historical monument in Belgrade.',
          imgSrc: 'assets/kalemegdan.jpg'
      },
      'gardos': {
          title: 'Gardoš',
          description: 'Gardoš is an urban neighborhood of Belgrade, Serbia, located in the municipality of Zemun.',
          imgSrc: 'assets/gardos.jpg'
      },
      'skadarlija': {
          title: 'Skadarlija',
          description: 'Skadarlija is a vintage street, an urban neighborhood and former municipality of Belgrade.',
          imgSrc: 'assets/skadarlija.jpg'
      },
      'republic-square': {
          title: 'Republic Square',
          description: 'Republic Square is the central town square and an urban neighborhood of Belgrade.',
          imgSrc: 'assets/trg.jpg'
      },
      'ada-ciganlija': {
          title: 'Ada Ciganlija',
          description: 'Ada Ciganlija is a river island that has artificially been turned into a peninsula.',
          imgSrc: 'assets/ada.jpg'
      },
      'savamala': {
          title: 'Savamala',
          description: 'Savamala is an urban neighborhood of Belgrade, located in the Belgrade municipality of Savski Venac.',
          imgSrc: 'assets/savamala.jpg'
      },
      'avala': {
          title: 'Avala',
          description: 'Avala is a mountain in Serbia, overlooking Belgrade.',
          imgSrc: 'assets/avala.webp'
      }
  };

  const modal = document.getElementById('attractionModal');
  const closeModal = document.getElementsByClassName('close')[0];
  const detailsContainer = document.getElementById('attraction-details');

  document.querySelectorAll('.slider-img img, .detail-box a').forEach(element => {
      element.addEventListener('click', (event) => {
          const attractionKey = event.target.getAttribute('data-attraction');
          const attraction = attractions[attractionKey];

          if (attraction) {
              detailsContainer.innerHTML = `
                  <img src="${attraction.imgSrc}" alt="${attraction.title}">
                  <div class="text-content">
                      <h1>${attraction.title}</h1>
                      <p>${attraction.description}</p>
                  </div>
              `;
              modal.style.display = 'block';
          }
      });
  });

  // Close the modal when the user clicks on <span> (x)
  closeModal.onclick = function() {
      modal.style.display = 'none';
  }

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});



