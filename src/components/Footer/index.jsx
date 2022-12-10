import "./index.css"
import logo from "/src/assets/logo.png"

export function Footer() {
  return (
    <div className="footer-main">
        <img src={logo} alt="logo" />
        <div>
            <p>Projeto feito por:</p>
            <span>Vinicius Gonçalves</span> 
            <p>api=TMDB</p>
        </div>
    </div>
  )
}
