'use strict';

function main() {
  $('.thumbnail').on('click', function(event) {
    $('.fullSizeImage').attr('src', $(this).find('img').attr('src'));
    $('.fullSizeImage').attr('alt', $(this).find('img').attr('alt'));
  });
}

$(main);