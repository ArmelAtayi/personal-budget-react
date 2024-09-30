import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const [dataSource, setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "Red",
          "Green",
          "purple",
        ],
      },
    ],
    labels: [],
  });

  useEffect(() => {
    const getBudget = async () => {
      const res = await axios.get("http://localhost:3000/budget"); 
      const budgetData = res.data.myBudget;

      const data = budgetData.map(item => item.budget); 
      const labels = budgetData.map(item => item.title);

      setDataSource({
        datasets: [
          {
            data: data,
            backgroundColor: [
              "#ffcd56",
              "#ff6384",
              "#36a2eb",
              "#fd6b19",
              "Red",
              "Green",
              "purple",
            ],
          },
        ],
        labels: labels,
      });
    };

    getBudget();
  }, []);

  return (
    <div className="chart-container" style={{ maxWidth: "400px", margin: "auto" }}> 
      <Pie data={dataSource} width={400} height={400} options={{ maintainAspectRatio: false }} /> 
    </div>
  );
};

export default Chart;
