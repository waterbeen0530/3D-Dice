import styled from "styled-components";
import windEyes from "../../assets/img/wind/windEyes.png";

export default function Dice() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Front>
            <Image src={windEyes}></Image>
          </Front>
          <Left>
            <Image src={windEyes}></Image>
          </Left>
          <Top>
            <Image src={windEyes}></Image>
          </Top>
          <Bottom>
            <Image src={windEyes}></Image>
          </Bottom>
          <Right>
            <Image src={windEyes}></Image>
          </Right>
          <Back>
            <Image src={windEyes}></Image>
          </Back>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: 320px;
  margin: 0 auto 0 auto;
  perspective: 1500px;
`;

const Frame = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  margin-top: 200px;
  transform-style: preserve-3d;
  transform: rotateY(10deg) rotateX(-10deg);
  animation: rotate 2.5s infinite forwards linear;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes rotate {
    from {
      transform: rotateY(0deg) rotateX(360deg);
    }
    to {
      transform: rotateY(-360deg) rotateX(0deg);
    }
  }
`;

const Image = styled.img`
  width: 70%;
`;

const Face = styled.div`
  position: absolute;
  top: -100px;
  width: 170px;
  height: 170px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  box-shadow: inset 0 0 0 2000px #3acbd4d0;
`;

const Front = styled(Face)`
  transform: rotateY(0deg) translateZ(85px);
`;
const Back = styled(Face)`
  transform: rotateX(180deg) translateZ(85px);
`;
const Left = styled(Face)`
  transform: rotateY(90deg) translateZ(85px);
`;
const Right = styled(Face)`
  transform: rotateX(270deg) translateZ(85px);
`;
const Top = styled(Face)`
  transform: rotateX(90deg) translateZ(85px);
`;
const Bottom = styled(Face)`
  transform: rotateY(-90deg) translateZ(85px);
`;
