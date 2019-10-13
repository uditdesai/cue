import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  border: 6px solid #bb6bd9;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  min-width: 200px;
  display: grid;
  // justify-items: center;
  grid-template-rows: 70% 30%;
`;

const Word = styled.h1`
  display: flex;
  width: 100%;
  font-family: "Roboto-Bold";
  font-size: 36px;
  color: black;
  justify-content: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 200px;
  top: 20%;
`;

const WordScreen = ({ sentence }) => {
  return (
    <Container>
      <InnerContainer>
        <ItemContainer>
          <ImageContainer>
            <Image src="https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg"></Image>
          </ImageContainer>
          <Word>Fox</Word>
        </ItemContainer>
      </InnerContainer>
    </Container>
  );
};

export default WordScreen;
