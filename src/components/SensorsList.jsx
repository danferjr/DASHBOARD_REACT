import LineGraph from "./SensorCharts";
import { useState } from "react";

const targetUrl = "ws://192.168.1.94/ws"
const ws = new WebSocket(targetUrl)

export default function GraphsList() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)
  
  const addData = (value) => {
    let newData = { time: setCount(count+1), light: value };
    setData([...data, newData])
  };

  ws.onopen = () =>{
    console.log("conectado")
  }

  ws.onmessage = (e) => {
    addData(e.data);
  };

  return (
    <>
      <LineGraph data={data} />
      <LineGraph data={data} />
    </>
  );
}
