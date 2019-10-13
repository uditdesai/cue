import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 388px;
  border: 6px solid #bb6bd9;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: white;
`;

const StartContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  background-color: white;
`;

const MainStartText = styled.h1`
  font-family: "Montserrat-Bold";
  color: black;
  font-size: 24px;
  margin: 0;
`;

const RecordButtonContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #bb6bd9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
  cursor: pointer;
`;

const RecordButtonImg = styled.img`
  width: 36px;
  align-self: center;
`;

const OtherStartText = styled.h3`
  font-family: "Montserrat-Bold";
  color: #a8a6a6;
  font-size: 18px;
  margin: 20px 0 0 0;
`;

const InnerContainer = styled.div`
  height: 400px;
  width: 90%;
  overflow-x: scroll !important;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
`;

const ItemContainer = styled.div`
  height: 400px;
  margin-right: 40px;
  width: 200px;
  min-width: 200px;
  display: grid;
  justify-items: center;
  grid-template-rows: 50% 50%;
`;

const Word = styled.h1`
  display: flex;
  width: 100%;
  font-family: "Montserrat-Bold";
  font-size: ${props => (props.tag === "" ? "28px" : "48px")};
  color: ${props =>
    props.tag === ""
      ? "black"
      : props.tag === "NN"
      ? "#eb5757"
      : props.tag === "JJ"
      ? "#27ae60"
      : "#2d9cdb"};
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  align-self: flex-end;
`;

const WordScreen = ({ started, sentence, resumed, handleStart }) => {
  return (
    <Container>
      {started === false ? (
        <StartContainer resumed={started}>
          <MainStartText>Press record and start speaking</MainStartText>
          <RecordButtonContainer onClick={handleStart}>
            <RecordButtonImg src="https://i.imgur.com/P8xGBcD.png" />
          </RecordButtonContainer>
          <OtherStartText>Press pause when you're stuck</OtherStartText>
        </StartContainer>
      ) : resumed === true ? (
        <StartContainer resumed={resumed}>
          <OtherStartText>Listening...</OtherStartText>
        </StartContainer>
      ) : (
        <InnerContainer resumed={resumed}>
          {sentence.map(word => (
            <ItemContainer>
              <ImageContainer>
                <Image src={word.image}></Image>
              </ImageContainer>
              <Word tag={word.tag}>{word.token}</Word>
            </ItemContainer>
          ))}
        </InnerContainer>
      )}
    </Container>
  );
};

export default WordScreen;
