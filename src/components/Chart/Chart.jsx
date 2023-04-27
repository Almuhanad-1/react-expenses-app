import React from 'react'
import './Chart.css'
import ChartBars from './ChartBars'
const Chart = (props) => {
  console.log("Chart: ", props)
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={props.maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart