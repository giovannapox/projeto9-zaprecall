import Topo from "./components/Topo"
import TodosCards from "./components/TodosCards"
import Rodape from "./components/Rodape"
import { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle"
import TelaInicio from "./components/TelaInicio"

export default function App() {
    const [contador, setContador] = useState(0);
    const [showTela, setShowTela] = useState("none")
    return (
        <>
            <TelaInicio setShowTela={setShowTela}/>
            <TelaPrincipal showTela={showTela}>
                <Container>
                    <GlobalStyle />
                    <Topo />
                    <TodosCards contador={contador} setContador={setContador} />
                </Container>
                <Rodape contador={contador} />
            </TelaPrincipal>
        </>
    )
}

const Container = styled.div`
background-color: #FB6B6B;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
`

const TelaPrincipal = styled.div`
    display: ${props => props.showTela}
`