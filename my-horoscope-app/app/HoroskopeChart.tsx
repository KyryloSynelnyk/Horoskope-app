
import Chart from 'react-apexcharts';

const HoroskopeChart = ({ careerScore, relationshipScore, healthScore }) => {

  const colorPalette = ['#2196F3', '#E91E63', '#2C6B2F'];
  const getColor = (index: number) => colorPalette[index % colorPalette.length];

  const options = {
    chart: {
      type: 'bar',
      height: '300px',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    xaxis: {
      categories: ["Кар'єра", "Відносини", "Здоров'я"],
    },
    yaxis: {
      max: 100,
      title: {
        text: 'Значення',
      },
    },
  };

  const series = [
    {
      name: "Значення",
      data: [
        { x: "Кар'єра", y: careerScore, fillColor: getColor(0) },
        { x: "Відносини", y: relationshipScore, fillColor: getColor(1) },
        { x: "Здоров'я", y: healthScore, fillColor: getColor(2) },
      ],
    },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default HoroskopeChart;
