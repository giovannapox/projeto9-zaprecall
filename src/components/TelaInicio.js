import logo from "../assets/logo.png"
import styled from "styled-components"
import { useState } from "react"

export default function TelaInicio({setShowTela}) {
    const [display, setDisplay] = useState("flex")

    function sumirTela(){
        setDisplay("none")
        setShowTela("flex")
    }

    return (
        <Tela display={display}>
            <img src={logo} alt="logo" />
            <p>ZapRecall</p>
            <button data-test="start-btn" onClick={sumirTela}>Iniciar Recall!</button>
        </Tela>
    )
}

const Tela = styled.div`
    height: 100vh;
    background-color: #FB6B6B;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: ${props => props.display};
    && img {
        width: 136px;
        height: 161px;
    } 
    && p {
        height: 59px;
        margin-top: 20px;
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
    } 
    && button {
        border: 1px solid #D70900;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        width: 246px;
        height: 54px;
        background-color: #FFFFFF;
        font-family: 'Recursive', sans-serif;
        color: #D70900;
        font-size: 18px;
        font-weight: 400;
        margin-top: 46px;
    }
`