import cards from "./cards"
import styled from "styled-components"

export default function Rodape ({contador}) {
    return (
        <DivRodape data-test="footer">
            <p>{contador}/{cards.length} CONCLUÍDOS</p>
        </DivRodape>
    )
}

const DivRodape = styled.div`
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
width: 100%;
height: 70px;
position: fixed;
bottom: 0;
&&  p {
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
}
`