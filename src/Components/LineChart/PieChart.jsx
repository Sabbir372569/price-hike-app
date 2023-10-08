// import React from 'react';
/*import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext('2d');


    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ['Math', 'English', 'Physics', 'Chemistry', 'Biology'],
        datasets: [
          {
            data: [100, 50, 89, 69, 75],
            backgroundColor: [
              'rgb(255, 0, 0)',
              'rgb(60, 179, 113)',
              'rgb(238, 130, 238)',
              'rgb(255, 165, 0)',
              'rgb(106, 90, 205)'
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "right", // Adjust the legend position as needed
          },
          spacing: 50, // Adjust the spacing to control the gap (in pixels)
        },
        // rotation: -0.5 * Math.PI,                          // Rotate labels counterclockwise by 90 degrees
        // cutout: "40%",                                     // Adjust the cutout percentage to create a gap
      },
    })
    return () =>{
      if(chartInstance.current){
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-96 h-80">
      <h3 className="pl-32">Pie Chart</h3>
      <canvas ref={chartRef} style={{ width:'200px', height:'100px' }} />
    </div>
  );
};

export default PieChart; */

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Math", "English", "Physics", "Chemistry", "Biology"],
        datasets: [
          {
            data: [100, 50, 89, 69, 75],
            backgroundColor: [
              "rgb(255, 0, 0)",
              "rgb(60, 179, 113)",
              "rgb(238, 130, 238)",
              "rgb(255, 165, 0)",
              "rgb(106, 90, 205)",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // Hide the default legend
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[30] h-80 flex justify-evenly">
      <div>
        <canvas ref={chartRef} style={{ width: "200px", height: "100px" }} />
      </div>
      <div className="label-container pt-4 list-disc">
        <h3 className="text-left text-lg font-semibold">Pie Chart</h3>
        <ul className="list-disc">
          <li className="label leading-3">Math</li>
          <li className="label leading-3">English</li>
          <li className="label leading-3">Physics</li>
          <li className="label leading-3">Chemistry</li>
          <li className="label leading-3">Biology</li>
        </ul>
      </div>
    </div>
  );
};

export default PieChart;
