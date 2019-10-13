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

const WordScreen = () => {
  return (
    <Container>
      <InnerContainer>
        {sentence.map(word => (
          <ItemContainer>
            <ImageContainer>
              <Image src={word.image}></Image>
            </ImageContainer>
            <Word tag={word.tag}>{word.token}</Word>
          </ItemContainer>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default WordScreen;
