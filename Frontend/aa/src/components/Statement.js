import React from 'react'
import Navbar from './Navbar'
import '../css/dashboard.css'
import {
    // main component
    Chart,
    // graphs
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    helpers, DropShadow, Gradient
  } from 'rumble-charts';
function Statement() {
console.log(window.sessionStorage.getItem("id"))
const id=window.sessionStorage.getItem("id");
const referenceId = window.sessionStorage.getItem("referenceId");
const trackingId = window.sessionStorage.getItem("trackingId");
const series = [{
    data: [15000, 65000, 80000]
  }, {
    data: [10000, 80000, 90000]
  }, {
    data: [11000, 50000, 61000]
  }
];
  return (
    
    <div>
        <Navbar/>
        <h2 className='headingS'>Credit vs Debit vs Saving in last three months</h2>
        <Chart width={900} height={350} series={series} minY={0} maxY={100000} className="chartBar">
  <Bars innerPadding={5} groupPadding={20} />
  <Lines />
  <Dots />
</Chart>;
    </div>
  )
}

export default Statement