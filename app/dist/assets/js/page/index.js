"use strict";

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"],
    datasets: [{
      label: 'Temps de trajet',
      data: [30, 35, 30, 40, 38, 45, 50, 52],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)',
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
    },
    {
      label: 'Densité du Traffic',
      data: [15, 16, 14, 15, 25, 30, 59, 40],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderColor: 'transparent',
      pointBorderWidth: 0 ,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          // display: false,
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          callback: function(value, index, values) {
            return value + '%';
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          tickMarkLength: 15,
        }
      }]
    },
  }
});

var balance_chart = document.getElementById("balance-chart").getContext('2d');

var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

var myChart = new Chart(balance_chart, {
  type: 'line',
  data: {
    labels: ['16-07-2021', '17-07-2021', '18-07-2021', '19-07-2021', '20-07-2021', '21-07-2021', '22-07-2021', '23-07-2021', '24-07-2021', '25-07-2021', '26-07-2021', '27-07-2021', '28-07-2021', '29-07-2021', '30-07-2021', '31-07-2021'],
    datasets: [{
      label: 'Traffic',
      data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(63,82,227,1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

var sales_chart = document.getElementById("sales-chart").getContext('2d');

var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

var myChart = new Chart(sales_chart, {
  type: 'line',
  data: {
    labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
    datasets: [{
      label: 'Embouteillage',
      data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderColor: 'rgba(254,86,83,1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

$("#products-carousel").owlCarousel({
  items: 3,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
