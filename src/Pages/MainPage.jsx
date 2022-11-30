import styled from "styled-components";
import MainItem from "../components/main/MainItem";
import { items } from "../docs/MainDocs";

export default function Main() {
  return (
    <Container>
      <Text>잃어버린 신의 눈동자 공양하기</Text>
      <Wrapper>
        {items.map((item, i) => (
          <MainItem key={i} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
`;

const Text = styled.h1`
  font-size: 40px;

  @media (max-width: 380px) {
    width: 90%;
    font-size: 36px;
    line-height: 60px;
  }
`;

const Wrapper = styled.div`
  margin-top: 100px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 380px) {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
