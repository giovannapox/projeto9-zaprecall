import Topo from "./components/Topo"
import TodosCards from "./components/TodosCards"
import Rodape from "./components/Rodape"
import { useState } from "react"

export default function App() {
    const [contador, setContador] = useState(0);
    return (
        <>
            <Topo />
            <TodosCards contador={contador} setContador={setContador}/>
            <Rodape contador={contador}/>
        </>
    )
}