"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Graph() {
  const [graphData, setGraphData] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState("ph");
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true); 
    fetchGraphData();
  }, []);

  const fetchGraphData = async () => {
    try {
      const response = await axios.get("/api/get");
      if (response.data.success) {
        setGraphData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching graph data:", error);
    }
  };

  const metrics = ["ph", "ec", "salt", "tds"];


  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gray-200 p-4 h-screen">
      <div className="flex items-center m-10 p-2">
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
          className="px-6 p-2 bg-gray-300 rounded mr-4"
        >
          {metrics.map((metric) => (
            <option key={metric} value={metric}>
              {metric.toUpperCase()}
            </option>
          ))}
        </select>
        <button
          onClick={fetchGraphData}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Show
        </button>
      </div>
      <LineChart
        width={800}
        height={500}
        data={graphData.map((item) => ({
          name: `Test No ${item.testNo}`,
          value: item[selectedMetric],
        }))}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
