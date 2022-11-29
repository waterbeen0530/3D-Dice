import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Logo>3D-DICE</Logo>
      <Text>
        <h1>바람의 원소와 공명하기</h1>
        <Row></Row>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.p`
  margin: 0;
  padding: 30px 0 0 0;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  position: relative;
  margin: 100px 0 0 0;
  h1 {
    margin: 0;
    line-height: 70px;
    font-size: 50px;
  }
`;

const Row = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: fff;
`;
