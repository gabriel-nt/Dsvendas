import axios from 'axios';
import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import { SaleSuccess } from 'types/sale';
import { BASE_URL } from 'utils/requests';
import { round } from 'utils/format';

type SeriesData = {
  name: string;
  data: number[];
}

type BarData = {
  labels: {
    categories: string[]
  };
  series: SeriesData[];
}

const BarChart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  const [isLoad, setIsLoad] = useState(false);
  const [chartData, setChartData] = useState<BarData>({} as BarData);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`${BASE_URL}/sales/success-by-seller`);
      const data = response.data as SaleSuccess[];

      const labels = {
        categories: data.map(item => item.sellerName)
      };

      const series = [
        {
          name: '% Success',
          data: data.map(item => round(100 * item.deals / item.visited, 1))
        }
      ];

      setChartData({
        labels,
        series
      });

      setIsLoad(true);
    }

    loadData();
  }, []);
  
  return (
    <>
      {
        isLoad && (
          <Chart 
            type="bar"
            height={240}
            series={chartData.series}
            options={{ ...options, xaxis: chartData.labels }}
          />
        )
      }
    </>
  )
}

export default BarChart;
