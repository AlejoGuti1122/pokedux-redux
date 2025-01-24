import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Col } from "antd"
import { getPokemon, getPokemonDetails } from "./api"
import PokemonList from "./components/PokemonList"
import Searcher from "./components/Searcher"
import logo from "./statics/logo.svg"
import "./App.css"
import { BgColorsOutlined } from "@ant-design/icons"

const App = () => {
  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonList = await getPokemon()
        const pokemonsDetailed = await Promise.all(
          pokemonList.map((pokemon) => getPokemonDetails(pokemon))
        )
        setPokemons(pokemonsDetailed)
        dispatch(setPokemons(pokemonsDetailed))
      } catch (error) {
        console.error("Error fetching Pokémon data:", error)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Col
        span={4}
        offset={10}
      >
        <img
          src={logo}
          alt="Pokedux"
        />
      </Col>
      <Col
        span={8}
        offset={8}
      >
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
