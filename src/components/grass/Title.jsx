import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Text>
        <h1>풀의 신의 눈동자 공양하기</h1>
        <p>신의 눈동자를 클릭해보세요</p>
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

const Text = styled.div`
  position: relative;
  margin: 50px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 400px) {
    margin: 0;
  }

  h1 {
    margin: 0;
    line-height: 70px;
    font-size: 50px;
    @media (max-width: 400px) {
      width: 70%;
      font-size: 36px;
      line-height: 50px;
    }
  }
`;

const Row = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: fff;
`;
