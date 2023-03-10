import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function VeiwPhoto() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://nightgown-elk.cyclic.app/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
    </div>
  );
}

export default VeiwPhoto;
