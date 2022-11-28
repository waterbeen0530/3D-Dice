import styled from "styled-components";

function App() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Front>
            <p>1</p>
          </Front>
          <Left>
            <p>2</p>
          </Left>
          <Top>
            <p>3</p>
          </Top>
          <Bottom>
            <p>4</p>
          </Bottom>
          <Right>
            <p>5</p>
          </Right>
          <Back>
            <p>6</p>
          </Back>
        </Frame>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: #2a2734;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
`;

const Wrapper = styled.div`
  position: relative;
  width: 320px;
  margin: 0px auto 0 auto;
  perspective: 1500px;
`;

const Frame = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  transform-style: preserve-3d;
  transform: rotateY(10deg) rotateX(-10deg);
  animation: rotate 2.5s infinite forwards linear;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;

  @keyframes rotate {
    from {
      transform: rotateY(0deg) rotateX(360deg);
    }
    to {
      transform: rotateY(-360deg) rotateX(0deg);
    }
  }
`;

const Face = styled.div`
  position: absolute;
  top: -100px;
  width: 200px;
  height: 200px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
`;

const Front = styled(Face)`
  box-shadow: inset 0 0 0 2000px #ff6b6bd0;
  transform: rotateY(0deg) translateZ(100px);
`;
const Back = styled(Face)`
  box-shadow: inset 0 0 0 2000px #ffd43bd0;
  transform: rotateX(180deg) translateZ(100px);
`;
const Left = styled(Face)`
  box-shadow: inset 0 0 0 2000px #748ffcd0;
  transform: rotateY(90deg) translateZ(100px);
`;
const Right = styled(Face)`
  box-shadow: inset 0 0 0 2000px #a9e34bd0;
  transform: rotateX(270deg) translateZ(100px);
`;
const Top = styled(Face)`
  box-shadow: inset 0 0 0 2000px #ffa94dd0;
  transform: rotateX(90deg) translateZ(100px);
`;
const Bottom = styled(Face)`
  box-shadow: inset 0 0 0 2000px #da77f2d0;
  transform: rotateY(-90deg) translateZ(100px);
`;
