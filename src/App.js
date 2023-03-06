import Topo from "./components/Topo"
import TodosCards from "./components/TodosCards"
import Rodape from "./components/Rodape"
import { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle"

export default function App() {
    const [contador, setContador] = useState(0);
    return (
        <>
            <Container>
                <GlobalStyle />
                <Topo />
                <TodosCards contador={contador} setContador={setContador} />
            </Container>
            <Rodape contador={contador} />
        </>
    )
}

const Container = styled.div`
background-color: #FB6B6B;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
`