import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Filter } from '../../components/Filter'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'
import "./index.css"


export function Movies(props) {
  
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)


  async function getMovies(pageChange = false) {

    const response = await api.get(`/movie/${props.params}?page=${page}&api_key=614202b1349a9d24b50b55bbe161f514`)
    if (pageChange) {
      setMovies([...movies, ...response.data.results])
      setPage(page+1)
    }else {
      setMovies(response.data.results)
    }
  }

  useEffect(() => {
    getMovies()
  }, [props.params])

  function selectChange(e){
    const tipo = e.target.value


    
    switch (tipo) {
      case "popularidadeMenor":
        const moviesMenor = [...movies].sort((a,b) => a.popularity - b.popularity);
        setMovies(moviesMenor)
        break;
      case "popularidadeMaior":
        const moviesMaior = [...movies].sort((a,b) => b.popularity - a.popularity);
        setMovies(moviesMaior)
        break;
      case "avaliacaoMelhor":
        const avaliacaoMelhor = [...movies].sort((a,b) => b.vote_average - a.vote_average);
        setMovies(avaliacaoMelhor)
        break;
      case "avaliacaoPior":
        const avaliacaoPior = [...movies].sort((a,b) => a.vote_average - b.vote_average);
        setMovies(avaliacaoPior)
        break;
      case "tituloZa":
        const tituloZa = [...movies].sort((a, b) => {
          let textb = b.title.toUpperCase();
          let texta = a.title.toUpperCase();
          console.log(textb);
          return (textb < texta) ? -1 : (textb > texta) ? 1 : 0;
        })
        setMovies(tituloZa)
        break;
      case "tituloAz":
        const tituloAz = [...movies].sort((a, b) => {
          let textb = b.title.toUpperCase();
          let texta = a.title.toUpperCase();
          return (texta < textb) ? -1 : (texta > textb) ? 1 : 0;
        })
        setMovies(tituloAz)
        break;
    }
  }

  return (
    <div> 

        <Header />

        <main>

          <div className='body-container'>
            <Filter changeFilter={selectChange} filmesh1={props.filmesh1} />
            <div className='movies-button'>
              <div className='movies-cards'>
                  {movies.map((movie, idx) => ( 
                      <Card img={movie.poster_path} data={movie.release_date} title={movie.title} key={movie.id + idx} />
                  ))}
              </div>
              <button className='button-load-more' onClick={() => getMovies(true)}>Carregar Mais</button> 
            </div>
          </div>

        </main>
        
        <footer>
          <Footer />
        </footer>

    </div>
  )
}
