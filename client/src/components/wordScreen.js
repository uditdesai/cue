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
`;

const InnerContainer = styled.div`
  height: 400px;
  width: 80%;
  overflow: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ItemContainer = styled.div`
  height: 400px;
  margin-right: 20px;
  width: auto;
  display: grid;
  grid-template-rows: 70% 30%;
`;

const Word = styled.h1`
  margin: auto 0 auto 0;
  font-family: "Roboto-Bold";
  font-size: 36px;
  color: black;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 300px;
  top: 20%;
`;

const wordScreen = () => {
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
