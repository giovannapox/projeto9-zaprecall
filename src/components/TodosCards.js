import Card from "./Card"
import cards from "./cards"

export default function TodosCards ({contador, setContador}) {
    return (
        <div>
			{cards.map((c, i) => <Card perguntas={c.question} respostas={c.answer} i={i} contador={contador} setContador={setContador}/>)}
		</div>
    )
}