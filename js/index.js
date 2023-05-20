const steps = document.querySelectorAll(".step");

function isInViewport(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function distanceFromCenterOfViewport(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var docViewCenter = docViewTop + $(window).height() / 2;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return Math.abs(docViewCenter - elemTop);
}

let activeStep = steps[0];

window.onscroll = () => {
    // add active class to steps when they are in the viewport
    steps.forEach((step) => {
        if (isInViewport(step)) {
            if (distanceFromCenterOfViewport(step) < distanceFromCenterOfViewport(activeStep)) {
                activeStep.classList.remove("active");
                step.classList.add("active");
                activeStep = step;
            }
        }
    }
    );
  };


// chose random planet image for the hero planet
const planetImages = [
    ['../images/planet1.png', true, 'planet1.html'],
    ['../images/planet2.png', false, 'planet2.html'],
    ['../images/planet3.png', true, 'planet3.html'],
    ['../images/planet4.png', true, 'planet4.html'],
    ['../images/planet5.png', true, 'planet5.html'],
    ['../images/planet6.png', true, 'planet6.html'],
    ['../images/planet7.png', true, 'planet7.html'],
    ['../images/planet8.png', true, 'planet8.html'],
    ['../images/planet9.png', true, 'planet9.html'],
    ['../images/planet10.png', true, 'planet10.html'],
    ['../images/planet11.png', true, 'planet11.html'],
    ['../images/planet12.png', true, 'planet12.html'],
];

const randomImage = planetImages[Math.floor(Math.random() * planetImages.length)];

const heroPlanet = document.querySelector('.planet');
const $ball = $(heroPlanet).find('.ball');
$ball.css('background-image', `url(${randomImage[0]})`);
if (!randomImage[1]) {
    $ball.removeClass('shadowed');
}

// add link to hero planet id 'hero-planet-link'
const heroPlanetLink = document.getElementById('hero-planet-link');
heroPlanetLink.href = randomImage[2];

