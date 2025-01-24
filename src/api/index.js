import axios from "axios"

export const getPokemon = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20") // Modificada para obtener lista

    return res.data.results
  } catch (err) {
    console.error("Error fetching pokemon list:", err)
    return []
  }
}

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error fetching pokemon details:", err)
      return null
    })
}
