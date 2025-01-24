import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import "./PokemonList.css"
import { StarOutlined } from "@ant-design/icons"
import PropTypes from "prop-types"

const PokemonCard = ({ name, image }) => {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
      }}
      title={name}
      extra={<StarOutlined style={{ color: "#ffd700" }} />}
      cover={
        <div
          style={{
            background: "#f0f2f5",
            padding: "1rem",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="pokemon-image"
            src={image}
            alt={name}
            style={{
              maxHeight: "200px",
              objectFit: "contain",
              width: "auto",
            }}
          />
        </div>
      }
    >
      <Meta description={name} />
    </Card>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default PokemonCard
