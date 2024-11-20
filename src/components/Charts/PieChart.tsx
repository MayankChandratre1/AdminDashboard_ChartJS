import React, { useEffect, useState } from "react";
import { ChartData } from "chart.js";
import {  Pie } from "react-chartjs-2";
import "chart.js/auto";
const PieChart = ({
  data,
  labels,
  backgroundColor,
  label,
}: {
  data: number[];
  labels: string[];
  backgroundColor: string[];
  label: string;
}) => {
  const [chartData, setChartData] = useState<ChartData<"pie">>({
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: [...backgroundColor],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: label,
          data: [...data],
          backgroundColor: [...backgroundColor],
        },
      ],
    });
  }, [data]);

  return (
    <div className="w-full h-[90%] max-h-full">
      {/* <div className='mt-1'>
            <h1 className='text-custom-secondary font-semibold text-xl'>{label}</h1>
            <ul className='flex gap-2'>
                {
                    labels.map((label, index) => (
                        <li key={index} className='text-xs px-4 py-3 rounded-xl text-custom-primary bg-custom-accent'>{label.toWellFormed()} : {data[index]?.toLocaleString()}</li>
                    ))
                }
            </ul>
        </div> */}
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
