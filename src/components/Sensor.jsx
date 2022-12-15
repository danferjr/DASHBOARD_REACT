import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush
} from "recharts";

export default function Sensor(props) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(props.data)
  }, [props])

  return (
    <>
      <div style={{ width: 250 }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={500}
            height={200}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="light"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
