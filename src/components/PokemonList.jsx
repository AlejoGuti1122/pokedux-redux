import PropTypes from "prop-types"
import { Row, Col } from 'antd'
import PokemonCard from "./PokemonCard"

const PokemonList = ({ pokemons = [] }) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {pokemons.map((pokemon) => (
        <Col 
          xs={24}    
          sm={12}    
          md={4}     
          lg={6}     
          key={pokemon.name}
        >
          <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        </Col>
      ))}
    </Row>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      sprites: PropTypes.shape({
        front_default: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export default PokemonList