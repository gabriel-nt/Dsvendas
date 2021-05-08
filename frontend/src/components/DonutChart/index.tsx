import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [chartData, setChartData] = useState<ChartData>({} as ChartData);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`${BASE_URL}/sales/amount-by-seller`);
      const data = response.data as SaleSum[];

      const series = data.map(item => item.sum);
      const labels = data.map(item => item.sellerName);

      setChartData({
        labels,
        series
      });

      setIsLoad(true);
    }

    loadData();
  }, []);

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  // }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <>
    {
      isLoad && (
        <Chart
          type="donut"
          height={240}
          series={chartData.series}
          options={{ ...options, labels: chartData.labels }}
        />
      )
    }
    </>

  )
}

export default DonutChart;
