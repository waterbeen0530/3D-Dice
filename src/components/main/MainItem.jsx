import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainItem({ item }) {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Text>{item.title}</Text>
      <Link to={item.link}>
        <Button>공양하기</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 230px;
  height: 280px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  & > a {
    text-decoration: none;
  }
`;
const Image = styled.img`
  width: 50%;
`;
const Text = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: #000;
`;

const Button = styled.div`
  width: 110px;
  height: 34px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #000;
`;
