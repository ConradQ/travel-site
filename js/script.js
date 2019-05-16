'use strict';

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  hash: true,
  groupCells: true
});

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
  var buttonRestart = document.querySelector('.restart-button');
  console.log('button: ', buttonRestart);
  buttonRestart.addEventListener('click', function(event) {
    if(!matchesSelector(event.target, '.restart-button')) {
      return;
    }
    var selector = event.target.getAttribute('data-selector');
    flkty.selectCell( selector );
  });