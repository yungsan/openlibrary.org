const MAX_VALUE = 70;



const charts = document.querySelectorAll('.charts');

for (let i = 0; i < charts.length; i++) {
  create(charts[i]);
}

function create(charts){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  for (let i = 1; i < 20; i++){
    const random = Math.floor(Math.random() * MAX_VALUE) + 1;
    const chart = `<div class="chart" style='height: ${random}px; background: #${randomColor}'></div>`;
    charts.innerHTML += chart;
  }
}


