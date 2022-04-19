import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ['GSR1', 'GSR2'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Water Level',
      data: [100,21],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

export function Reading() {
  return <Bar data={data} />;
}
