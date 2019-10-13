import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WordScreen from "./components/wordScreen";
import Play from "./play.png";
import Pause from "./pause.png";
import Fox from "./fox.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-column-start: 2;
  margin-bottom: 0;
  margin-top: 5vh;
  text-align: bottom;
`;

const Title = styled.h1`
  margin-top: 3vh;
  color: white;
  font-size: 78px;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  color: white;
  margin-top: 0;
`;

const Mascot = styled.img`
  width: 100%;
`;

const Content = styled.div`
  grid-column-start: 2;
  height: 400px;
`;

const LegendContainer = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 45% 40% 20%;
  margin-top: 40px;
`;

const TagContainer = styled.div`
  width: 90%;
  border-radius: 10px;
  border: 3px solid #6bd9c5;
  text-align: center;
  padding-left: 30px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Legend = styled.h3`
  color: ${props => `${props.color}`};
`;

const LegendTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
`;

const Circle = styled.div`
  background-color: ${props => `${props.color}`};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  grid-column-start: 3;
  display: flex;
  flex-direction: row;
  margin-right: 0;
`;

const Button = styled.img`
  margin-left: 10px;
  margin-right: 0;
`;

const sentenceData = [
  { token: "The", tag: "", image: "" },
  { token: "quick", tag: "JJ", image: "" },
  { token: "brown", tag: "JJ", image: "" },
  {
    token: "fox",
    tag: "NN",
    image:
      "https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg"
  },
  { token: "jumps", tag: "VB", image: "" },
  { token: "over", tag: "", image: "" },
  { token: "the", tag: "", image: "" },
  { token: "lazy", tag: "JJ", image: "" },
  {
    token: "dog",
    tag: "NN",
    image:
      "https://www.washingtonpost.com/resizer/J-KV2Xwpo332CjFPeEJn1-VGCuk=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg"
  }
];

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
      <Container>
        <TitleContainer>
          <div>
            <Title>Cue</Title>
            <Subtitle> Live visual cues to develop vocabulary</Subtitle>
          </div>
          <Mascot src={Fox}></Mascot>
        </TitleContainer>
      </Container>

      <Container>
        <Content>
          <WordScreen sentence={sentenceData} />
        </Content>
      </Container>

      <Container>
        <LegendContainer>
          <TagContainer>
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
          </TagContainer>

          <ButtonContainer>
            <Button src={Play} />
            <Button src={Pause} />
          </ButtonContainer>
        </LegendContainer>
      </Container>
    </>
  );
}

export default App;
