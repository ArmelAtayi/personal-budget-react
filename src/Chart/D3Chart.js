import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import axios from "axios";

const D3Chart = () => {
  const chartRef = useRef(null); // useRef to access the chart container
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
    const fetchBudgetData = async () => {
      try {
        const res = await axios.get("/budget-data.json"); 
        const budgetData = res.data.myBudget;
        const data = budgetData.map((item) => item.budget);
        const labels = budgetData.map((item) => item.title);

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
      } catch (error) {
        console.error("Error fetching the budget data", error);
      }
    };

    fetchBudgetData();
  }, []);

  useEffect(() => {
    if (dataSource.datasets[0].data.length > 0) {
      createD3Chart(); 
    }
  }, [dataSource]);

  const createD3Chart = () => {
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    // Remove existing SVG before re-rendering
    d3.select(chartRef.current).select("svg").remove();

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

  
    const color = d3.scaleOrdinal(dataSource.datasets[0].backgroundColor);

   
    const pie = d3.pie().value((d) => d);

   
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    
    const arcs = svg
      .selectAll("arc")
      .data(pie(dataSource.datasets[0].data))
      .enter()
      .append("g")
      .attr("class", "arc");

  
    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

   
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text((d, i) => dataSource.labels[i]);
  };

  return <div ref={chartRef}></div>; 
};

export default D3Chart;
