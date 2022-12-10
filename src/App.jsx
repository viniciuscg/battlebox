import React from 'react'
import { Movies } from './pages/Movies'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
           path="/"
           element={<Movies filmesh1="Filmes Populares" params="popular" />}
          />
          <Route
           path="/movies-cartaz"
           element={<Movies filmesh1="Filmes em Cartaz" params="now_playing"/>}
          />
          <Route
           path="/movies-estreiando"
           element={<Movies filmesh1="Filmes proximo da estreia" params="upcoming"/>}
          />
          <Route
           path="/movies-avaliados"
           element={<Movies filmesh1="Filmes bem avaliados" params="top_rated"/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
