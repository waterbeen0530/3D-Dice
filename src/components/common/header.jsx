import styled from "styled-components";
import logo from "../../assets/img/header/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Image src={logo}></Image>
        </Link>
        <Link to="/wind">
          <p>바람 신의 눈동자</p>
        </Link>
        <Link to="/rock">
          <p>바위 신의 눈동자</p>
        </Link>
        <Link to="/light">
          <p>번개 신의 눈동자</p>
        </Link>
        <Link to="/grass">
          <p>풀의 신의 눈동자</p>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  & > a {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
  }
`;
const Image = styled.img`
  width: 100%;
  margin-right: 20px;
`;
