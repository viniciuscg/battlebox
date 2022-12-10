import "./index.css"
import logo2 from "/src/assets/logo2.png"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="header-all">
      <div className="header-left">
        <a href="#"><img src={logo2} alt="" /></a>
        <div className="dropdown">
          <span>Filmes</span>
          <div className="dropdown-content">
            <p><Link to="/">Populares</Link></p>
            <p><Link to="/movies-cartaz">Em cartaz</Link></p>
            <p><Link to="/movies-estreiando">Próxima estreia</Link></p>
            <p><Link to="/movies-avaliados">Mais bem avaliados</Link></p>
          </div>
        </div>
        <p>Séries</p>
        <p>Pessoas</p>
        <p>Mais</p>
      </div>

      <div className="header-right">
        <p>➕</p>
        <p className="pt">PT</p>
        <p>🔔</p>
        <p>Perfil</p>
        <p>🔍</p>
      </div>
    </div>
  )
}