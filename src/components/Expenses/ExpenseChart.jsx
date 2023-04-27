import React from 'react'
import Chart from '../Chart/Chart'


const ExpenseChart = props => {


  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  let maxValue = 0;
  for (let i = 0; i < chartDataPoints.length; i++) {
    console.log(chartDataPoints[i].value > maxValue)
    if (chartDataPoints[i].value > maxValue) maxValue = chartDataPoints[i].value;
  }

  console.log('maxValue ', maxValue)

  return <Chart maxValue={maxValue} dataPoints={chartDataPoints} />
}

export default ExpenseChart