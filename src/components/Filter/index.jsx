import "./index.css"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"
import { useState } from "react"


export function Filter(props) {

  const [orderFilterOpen, setOrderFilterOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [whereFilterOpen, setWhereFilterOpen] = useState(false)

  function orderDown(){

    setOrderFilterOpen(!orderFilterOpen)

  }

  return (
    <div>

      <div className="box-filter-all">
        <p className='movies-h1-text' >{props.filmesh1}</p>
        <div className="box-filter">
          <button onClick={orderDown}>
            <span>Ordenar</span>
            { orderFilterOpen ? <IoIosArrowDown/> : <IoIosArrowForward/> } 
          </button>
          {orderFilterOpen && (
            <div className="order-for">
              <p><strong>Ordenar Resultados Por</strong></p>
              <select name="Filter" onChange={props.changeFilter}>
                <option value="popularidadeMaior">Popularidade (maior)</option>
                <option value="popularidadeMenor">Popularidade (menor)</option>
                <option value="avaliacaoMelhor">Avaliação (melhor)</option>
                <option value="avaliacaoPior">Avaliação (pior)</option>
                <option value="tituloAz">Título (a-Z)</option>
                <option value="tituloZa">Título (z-A)</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}
