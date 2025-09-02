// NAVBAR

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            links.forEach(function(innerLink) {
                innerLink.classList.remove('selected');
            });
            link.classList.add('selected');
        });
    });
});

// NAVBAR


// NAVIGATION IN NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu-items .nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-target');
            switch (targetPage) {
                case 'home':
                    window.location.href = 'index.html'; // Replace with your home page URL
                    break;
                case 'about':
                    window.location.href = 'about.html'; // Replace with your about page URL
                    break;
                case 'resume':
                    window.location.href = 'resume.html'; // Replace with your resume page URL
                    break;
                case 'portfolio':
                    window.location.href = 'portfolio.html'; // Replace with your portfolio page URL
                    break;
                case 'contact':
                    window.location.href = 'contact.html'; // Replace with your contact page URL
                    break;
                // Add more cases for additional pages
            }
        });
    });
});
// NAVIGATION IN NAVBAR

(function($) { "use strict";

$(document).ready(function(){"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


	});

})

// SCROLL TO TOP

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.navbar-toogle-mobile');
    var overlay = document.querySelector('.overlay-for-mobile ');
    
    toggleButton.addEventListener('click', function() {
        overlay.classList.toggle('open');
    });
});
