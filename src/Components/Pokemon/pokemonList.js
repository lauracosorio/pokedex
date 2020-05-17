import React, { Component } from "react";
import Axios from "axios";
import "../../Styles/Content.css";
import Navbar from "../layout/Navbar";
import Characterscard from "./pokemonCard";
import Footer from "../layout/Footer";
import PokemonSearch from "./pokemonSearch";

class CharacterList extends Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.getPokemonName();
  }

  //funcion para obtener pokemons

  getPokemonName = async (e) => {
    const res = await Axios.get("https://pokeapi.co/api/v2/pokemon/?limit=25");
    const data = await res.data;

    this.setState(
      {
        data: data.results,
      },
      () => console.log(this.state)
    );
  };

  // funcion para escuchar el input

  handleChangeFiltro = (e) => {
    const search = e.target.value;
    console.log(search);
    if (search !== "") {
      this.findPokemon(e.target.value);
    } else {
      this.getPokemonName();
    }
  };

  // funcion para buscar pokemon

  findPokemon(search) {
    const resInput = this.state.data.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    this.setState({ data: resInput });
  }

  render() {
    return (
      
      <div className="App">
        <Navbar />

        <PokemonSearch onChangeFiltro={this.handleChangeFiltro} />

       
        {this.state.data ? (
          <div className="row margenC justify-content-center">
            {this.state.data.map((data) => (
              <Characterscard
                name={data.name[0].toUpperCase() + data.name.slice(1)}
                url={data.url}
                key={data.name}
              />
            ))}
          </div>
        ) : (
          <>
            <img
              className="loading justify-content-center"
              src={require("../../images/pokeball.gif")}
              alt="Cargando Pokemón"
            />
            <h5 className="m-5 text-center">Cargando Pokemon...</h5>
          </>
        )}

        <Footer />
      </div>
      
    );
  }
}

export default CharacterList;
