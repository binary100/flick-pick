import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

const BarChart = (props) => {
  const chartData = {
    labels: props.labels,
    datasets: [{
      label: 'Bar Chart',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFE168', '#cc65fe', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#F2F2F2', '#808080'],
      borderColor: 'White',
      borderWidth: 2,
      hoverBorderColor: 'White',
      data: props.data
    }]
  };

  const chartOptions = {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      fontSize: 20,
      text: props.title
    },
    scales: {
      xAxes: [{
          ticks: {
              callback: function(value, index, values) {
                  return parseInt(value * 100) + '%';
              },
              min: 0
          }
      }]
    }
  }

  return (
    <div>
      <HorizontalBar
        data={chartData}
        width={100}
        height={50}
        options={chartOptions}
      />
    </div>
  );
};

export default BarChart;
