import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import iconeCerto from "../assets/icone_certo.png"
import iconeErro from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import styled from "styled-components"
import { useState } from "react"

export default function Cards({ i, perguntas, respostas, contador, setContador }) {
	const [valor, setValor] = useState()
	const [valorQuestao, setValorQuestao] = useState()
	const [cor, setCor] = useState("#333333")
	const [logo, setLogo] = useState(setaPlay)
	const [tracado, setTracado] = useState("")
	const [dataTest, setDataTest] = useState("play-btn")
	const [desabilitar, setDesabilitar] = useState()

	function viraCard(i) {
		setValor(i)
	}

	function mostraResposta(i) {
		setValorQuestao(i)
	}

	function naoLembrei() {
		setValor()
		setValorQuestao()
		setCor("#FF3030")
		setLogo(iconeErro)
		setTracado("line-through")
		setContador(contador + 1)
		setDataTest("no-icon")
		setDesabilitar("none")
	}

	function quaseNaoLembrei() {
		setValor()
		setValorQuestao()
		setCor("#FF922E")
		setLogo(iconeQuase)
		setTracado("line-through")
		setContador(contador + 1)
		setDataTest("partial-icon")
		setDesabilitar("none")
	}

	function acertou() {
		setValor()
		setValorQuestao()
		setCor("#2FBE34")
		setLogo(iconeCerto)
		setTracado("line-through")
		setContador(contador + 1)
		setDataTest("zap-icon")
		setDesabilitar("none")
	}

	return (
		<div data-test="flashcard">
			<Pergunta valor={valor} i={i} cor={cor} logo={logo} tracado={tracado} desabilitar={desabilitar}>
				<h1 data-test="flashcard-text">Pergunta {i + 1}</h1>
				<img data-test={dataTest} src={logo} alt="setaPlay" onClick={() => viraCard(i)} />
			</Pergunta>

			<Questao valor={valor} i={i} valorQuestao={valorQuestao}>
				<p data-test="flashcard-text">{perguntas}</p>
				<img data-test="turn-btn" src={setaVirar} alt="setaVirar" onClick={() => mostraResposta(i)} />
			</Questao>

			<Resposta valorQuestao={valorQuestao} i={i}>
				<p data-test="flashcard-text">{respostas}</p>
				<Botoes>
					<button data-test="no-btn" onClick={naoLembrei}>Não lembrei</button>
					<button data-test="partial-btn" onClick={quaseNaoLembrei}>Quase não lembrei</button>
					<button data-test="zap-btn" onClick={acertou}>Zap!</button>
				</Botoes>
			</Resposta>
		</div>
	)
}

const Pergunta = styled.div`
font-family: 'Recursive', sans-serif;
width: 300px;
height: 65px;
align-items: center;
justify-content: space-between;
background-color: #FFFFFF;
margin-bottom: 25px;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
display: ${props => (props.valor === props.i) ? "none" : "flex"};
color: ${props => props.cor};
text-decoration: ${props => props.tracado};
pointer-events: ${props => props.desabilitar};
&& img {
	width: 20px;
	height: 23px;
	margin-right: 19px;
}
&& h1 {
	margin-left: 15px;
	font-weight: 700;
	font-size: 16px;
}
`


const Questao = styled.div`
position: relative;
background-color: #FFFFD4;
width: 299px;
height: 131px;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
margin-bottom: 25px;
display: ${props => (props.valor === props.i && props.valorQuestao !== props.i) ? "flex" : "none"};
&& img {
	width: 30px;
	height: 20px;
	position: absolute;
	bottom: 6px;
	right: 5px;
} 
&& p {
	font-family: 'Recursive', sans-serif;
	font-weight: 400;
	font-size: 18px;
	color: #333333;
	margin-top: 18px;
	margin-left: 15px;
}

`


const Resposta = styled.div`
position: relative;
display: ${props => (props.valorQuestao === props.i) ? "flex" : "none"};
background-color: #FFFFD4;
width: 300px;
height: 131px;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
margin-bottom: 25px;
flex-direction: column;
&& p {
	font-family: 'Recursive', sans-serif;
	font-weight: 400;
	font-size: 18px;
	color: #333333;
	margin-top: 18px;
	margin-left: 15px;
}
`

const Botoes = styled.div`
position: absolute;
bottom: 10px;
left: 17px;
display: flex;
justify-content: center;
&& button:first-child {
	font-family: 'Recursive', sans-serif;
	background-color:#FF3030;
	border: none;
	border-radius: 5px;
	width: 85px;
	height: 37px;
	color: #FFFFFF;
	margin-right: 7px;
}
&& button:nth-child(2) {
	font-family: 'Recursive', sans-serif;
	background-color:#FF922E;
	border: none;
	border-radius: 5px;
	width: 85px;
	height: 37px;
	color: #FFFFFF;
	margin-right: 7px;
}
&& button:last-child {
	font-family: 'Recursive', sans-serif;
	background-color:#2FBE34;
	border: none;
	border-radius: 5px;
	width: 85px;
	height: 37px;
	color: #FFFFFF;
}
`
