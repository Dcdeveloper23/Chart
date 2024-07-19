const statistics = {
  active: 1410859,
  confirmed: 2805055,
  deaths: 2114177,
  recovered: 511019,
};

const labels = ["Active", "Confirmed", "Deaths", "Recovered"];
const values = [
  statistics.active,
  statistics.confirmed,
  statistics.deaths,
  statistics.recovered,
];

function createChart() {
  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Covid-19 Statistics",
          data: values,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

createChart();
