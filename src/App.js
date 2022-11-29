import "./App.css";
import styled from "styled-components";
import Dice from "./components/wind/Dice";
import Title from "./components/wind/Title";

export default function App() {
  return (
    <Container>
      <Title />
      <Dice />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2a2734;
`;
