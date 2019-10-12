import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    // callBackendAPI()
    //   .then(res => {
    //     setData(res.express);
    //   })
    //   .catch(err => console.log(err));
  }, []);

  return (
    <>
      <button onClick={handleClick}></button>
      <p>{data}</p>
    </>
  );
}

export default App;
