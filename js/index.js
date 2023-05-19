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