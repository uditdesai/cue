import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  const callAPI = async () => {
    const response = await fetch("/handle_click", { method: "POST" });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  const handleClick = async () => {
    callAPI()
      .then(res => {
        setData(res.express);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    callBackendAPI()
      .then(res => {
        setData(res.express);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}></button>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
