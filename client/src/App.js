import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WordScreen from "./components/wordScreen";

function App() {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 10% 80% 10%;
  `;

  const Title = styled.h2`
    margin-top: 10vh;
    grid-column-start: 2;
  `;

  const Content = styled.div`
    grid-column-start: 2;
    height: 400px;
  `;

  const LegendContainer = styled.div`
    grid-column-start: 2;
    display: grid;
    grid-template-columns: 15% 15% 15% auto 10% 5%;
    margin-top: 15px;
  `;

  const Legend = styled.h3`
    color: ${props => `${props.color}`};
  `;

  const LegendTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const Circle = styled.div`
    background-color: ${props => `${props.color}`};
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 10px;
  `;

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
      <Container>
        <Title>Select a language, press Q, and start reading</Title>
      </Container>

      <Container>
        <Content>
          <WordScreen />
        </Content>
      </Container>

      <Container>
        <LegendContainer>
          <LegendTag>
            <Circle color={"#EB5757"} />
            <Legend color={"#EB5757"}>Noun</Legend>
          </LegendTag>

          <LegendTag>
            <Circle color={"#27AE60"} />
            <Legend color={"#27AE60"}>Adjective</Legend>
          </LegendTag>

          <LegendTag>
            <Circle color={"#2D9CDB"} />
            <Legend color={"#2D9CDB"}>Verb</Legend>
          </LegendTag>
        </LegendContainer>
      </Container>
    </>
  );
}

export default App;
