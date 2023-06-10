// jQuery($ => {
//     let $shadow = $('#shadow-test');
//     let shadowMax = 30;
//     let shadowMin = shadowMax * -1;
//     let shadowMidPoints = [
//       $shadow.offset().left + $shadow.width() / 2,
//       $shadow.offset().top + $shadow.height() / 2
//     ];
  
//     $(document).on('mousemove', e => {
//         // check if the obect is hovered
//         if ($shadow.is(':hover')) {
//         let shadowX = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[0] - e.pageX));
//         let shadowY = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[1] - e.pageY));
//         $shadow.css('box-shadow', `${shadowX}px ${shadowY}px 100px rgba(0,0,0,0.5)`);
//         $shadow.css("filter", "none");
//         } else {
//         $shadow.css('box-shadow', 'none');
//         $shadow.css("filter", "drop-shadow(30px 30px 25px rgba(0, 0, 0, 0.5))");
//         }
//     });
//   });

// replace background image property of css with src of data-src attribute

// jQuery($ => {
//   let $background = $('.planet');
//   $background.each(function() {
//       let $this = $(this);
//       // get child element with class .ball
//       let $ball = $this.find('.ball');
//       let size = $this.data('size');
//       if (size) {
//         console.log(size);
//         $ball.css('transform', `scale(${size})`);
//       }
//       let src = $this.data('src');
//       if (src) {
//         console.log(src);
//         $ball.css('background-image', `url(${src})`);
//       }
//   });
// });

// The previous function without jQuery

const background = document.querySelectorAll('.planet'); 
background.forEach(function(item) {
    const ball = item.querySelector('.ball');
    const size = item.dataset.size;
    if (size) {
        ball.style.transform = `scale(${size})`; 
    }
    const src = item.dataset.src;
    if (src) {
        ball.style.backgroundImage = `url(${src})`;
    }
});