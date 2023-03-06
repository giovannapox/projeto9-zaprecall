import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import iconeCerto from "../assets/icone_certo.png"
import iconeErro from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import styled from "styled-components"
import { useState } from "react"

export default function Cards({i, perguntas, respostas, contador, setContador }) {
	const [valor, setValor] = useState()
	const [valorQuestao, setValorQuestao] = useState()
	const [cor, setCor] = useState("#333333")
	const [logo, setLogo] = useState(setaPlay)
	const [tracado, setTracado] = useState("")
	const [dataTest, setDataTest] = useState("play-btn")

	function viraCard (i) {
		setValor(i)
	}

	function mostraResposta (i){
		setValorQuestao(i)
	}

	function naoLembrei(){
		setValor()
		setValorQuestao()
		setCor("#FF3030")
		setLogo(iconeErro)
		setTracado("line-through")
		setContador(contador + 1)
		setDataTest("no-icon")
	}

	function quaseNaoLembrei(){
		setValor()
		setValorQuestao()
		setCor("#FF922E")
		setLogo(iconeQuase)
		setTracado("line-through")
		setContador(contador + 1)
		setDataTest("partial-icon")
	}

	function acertou(){
		setValor()
		setValorQuestao()
		setCor("#2FBE34")
		setLogo(iconeCerto)
		setTracado("line-through")
		setContador(contador + 1)
		setDataTest("zap-icon")
	}

	return (
		<div data-test="flashcard">
			<Pergunta valor={valor} i={i} cor={cor} logo={logo} tracado={tracado}>
				<h1 data-test="flashcard-text">Pergunta {i + 1}</h1>
				<img data-test={dataTest} src={logo} alt="setaPlay" onClick={() => viraCard (i)} />
			</Pergunta>

			<Questao valor={valor} i={i} valorQuestao={valorQuestao}>
				<p data-test="flashcard-text">{perguntas}</p>
				<img data-test="turn-btn" src={setaVirar} alt="setaVirar" onClick={() => mostraResposta(i)}/>
			</Questao>

			<Resposta valorQuestao={valorQuestao} i={i}>
				<p data-test="flashcard-text">{respostas}</p>
				<button data-test="no-btn" onClick={naoLembrei}>Não lembrei</button>
				<button data-test="partial-btn" onClick={quaseNaoLembrei}>Quase não lembrei</button>
				<button data-test="zap-btn" onClick={acertou}>Zap!</button>
			</Resposta>
		</div>
	)
}

const Pergunta = styled.div`
display: ${props => (props.valor === props.i) ? "none" : "flex"};
color: ${props => props.cor};
text-decoration: ${props => props.tracado};
`


const Questao = styled.div`
display: ${props => (props.valor === props.i && props.valorQuestao !== props.i) ? "flex" : "none"}
`


const Resposta = styled.div`
display: ${props => (props.valorQuestao === props.i) ? "flex" : "none"}
`
