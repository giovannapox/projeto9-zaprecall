import logo from "../assets/logo.png"
import styled from "styled-components"

export default function Topo () {
    return (
        <Logo>
            <img src={logo} alt="logo" />
            <p>ZapRecall</p>
        </Logo>
    )
}

const Logo = styled.div`
margin-top: 48px;
margin-bottom: 59px;
display: flex;
&& img {
	width: 52px;
	height: 60px;
}
&& p {
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-left: 10px;
}
`