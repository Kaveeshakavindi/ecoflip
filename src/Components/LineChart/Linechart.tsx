import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface LineChartProps {
  name: string; 
  data: number[]; 
}

const LineChart: React.FC<LineChartProps> = ({ name, data }) => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 100, 
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'], 
      title: {
        text: 'Years',
      },
    },
    yaxis: {
      title: {
        text: 'Impact Metric (CO₂ in Tons)',
      },
    },
    tooltip: {
      x: {
        format: 'yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.8,
      },
    },
    colors: ['#22c55e'], 
  };

  const chartSeries = [
    {
      name: name,
      data: data, 
    },
  ];

  return (
    <div className="w-11/12 bg-transparent p-6 rounded-lg">
      <h2 className="text-sm text-center mb-4 font-semibold">
        {name}
      </h2>
      <Chart options={chartOptions} series={chartSeries} type="area" height={350} />
    </div>
  );
};

export default LineChart;
