// var pipsSlider = document.getElementById('slider-pips');

// noUiSlider.create(pipsSlider, {
//     range: {
//         min: 0,
//         max: 100
//     },
//     start: [50],
//     pips: {mode: 'count', values: 5}
// });
// var pips = pipsSlider.querySelectorAll('.noUi-value');

// function clickOnPip() {
//     var value = Number(this.getAttribute('data-value'));
//     pipsSlider.noUiSlider.set(value);
// }

// for (var i = 0; i < pips.length; i++) {

//     // For this example. Do this in CSS!
//     pips[i].style.cursor = 'pointer';
//     pips[i].addEventListener('click', clickOnPip);
// }

$("#example_id").ionRangeSlider({
  type: "single",
  min: 0,
  max: 1000,
  from: 500,
  grid: true,
  decorate_both:false,
  disable: 'rangeDisable'
});
$(document).ready(function() {

  var ctx = document.getElementById('myChart');
  if (ctx) {
    var ctx = ctx.getContext('2d');
    ctx.height = 500;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
            datasets: [{
                label: 'النتيجة',
                data: [10, 56, 65, 50, 80, 70,75,60,50,90],
                backgroundColor: 'rgba(255, 99, 132, 0)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'المحاولات'
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  suggestedMin:0,
                  suggestedMax:100,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'النتيجة'
                }
              }]
          }
        }
    });
  }
  $('.img_logo_siman').click( function() {
      $('.side_main').toggleClass('active');
  });
});