/*eslint-env jquery*/
'use strict';

function fizzbuzz(num) {
  if (!(num%15)) return 'fizzbuzz';
  else if (!(num%5)) return 'buzz';
  else if (!(num%3)) return 'fizz';
  return num;
}

function main() {
  $('form').submit(function(e) {
    e.preventDefault();
    const userIn = $(this).find('#number-choice').val();
    // console.log(userIn);
    const fizzBuzzA = [];
    for (let i=1; i<=userIn; i++) {
      fizzBuzzA.push(fizzbuzz(i));
    }
    console.log(fizzBuzzA);
    let output = '';
    fizzBuzzA.forEach(val => {
      let c = '';
      if (val === 'fizz' || val === 'buzz' || val === 'fizzbuzz') c += val;
      output += `
      <div class="fizz-buzz-item ${c}">
        <span>${val}</span>
      </div>
      `;
    });
    $('.js-results').html(output);

    $(this).find('#number-choice').val('');
  });
}

$(main);