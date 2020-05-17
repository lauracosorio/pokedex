import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Content.css";

class CharactersCard extends Component {
  state = {
    name: "",
    image: "",
    pokemonIndex: "",
    type: "",
    imageLoading: true,
    id: '',
  };

  async componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name: name,
      pokemonIndex: pokemonIndex,
      image: image
    });
  }

  render() {
    return (
      <div className="col-sm-7 col-md-5 col-lg-4 mt-3" href="" target="_blank">
          <Link to= {`pokemon/${this.state.pokemonIndex}`}>
        <div className="card contenido text-center ">
          {this.state.imageLoading ? (
            <img
              src={require("../../images/pokeball.gif")}
              alt="Cargando Pokemón"
              className="card-img-top imageLoading d-block"
            />
          ) : null}

          <img
            src={this.state.image}
            className="card-img-top imagenpp"
            alt={this.state.name}
            onLoad={() => this.setState({ imageLoading: false })}
          />
          <div className="card-body tarjeta">
            <p className="card-text">{this.state.pokemonIndex} </p>
            <h5 className="card-title">{this.state.name}</h5>
          <p className="card-text">{this.state.type.name}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}

export default CharactersCard;
