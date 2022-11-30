import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Main from "./Pages/Main";
import Wind from "./Pages/Wind";
import Rock from "./Pages/Rock";
import Light from "./Pages/Light";
import Grass from "./Pages/Grass";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/wind" element={<Wind />}></Route>
          <Route path="/rock" element={<Rock />}></Route>
          <Route path="/light" element={<Light />}></Route>
          <Route path="/grass" element={<Grass />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2a2734;
`;
