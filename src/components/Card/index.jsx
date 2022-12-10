import "./index.css"
import moment from "moment/moment"

export function Card(props) {
  return (

    <div className='card'>
        <img src={"http://image.tmdb.org/t/p/w185" + props.img} alt="" /> 
        <a>{props.title}</a>
        <p>{moment(props.data).format("DD MMMM YYYY").toLowerCase()}</p>
    </div>
    
  )
}
