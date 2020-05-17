import React, { Component } from "react";
import Axios from "axios";
import "../../Styles/pokemonInfo.css";
import { Link } from "react-router-dom";

class CharacterInfo extends Component {
  state = {
    loading:true,
    id: "",
    name: "",
    pokemonIndex: "",
    image: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      spAtk: "",
      speDef: "",
    },
    height: "",
    weight: "",
    egggroups: "",
    abilities: "",
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;


    const pokemonInfo = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

    const pokemonSpeciesInfo = `https://pokeapi.co/api/v2/pokemon-species/1/`;

    //Pokemon Info

    const response = await Axios.get(pokemonInfo);

    const name = response.data.name[0].toUpperCase() + response.data.name.slice(1)

    const resImage = response.data.sprites.front_default;

    let { hp, attack, defense, speed, spAtk, speDef } = "";

    response.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          spAtk = stat["base_stat"];
          break;
        case "special-defense":
          speDef = stat["base_stat"];
          break;
        default:
          break;
      }
    });

    const weight = Math.round((response.data.weight * 100) / 1000); //kg

    const height = Math.round(response.data.height * 10); //centimetro

    const types = response.data.types.map((type => {
      return type.type.name[0].toUpperCase() + type.type.name.slice(1);
    }));

    const abilities = response.data.abilities
      .map((ability => {
        return (
          ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)
        );
      }))
      .join(", ");

    await Axios.get(pokemonSpeciesInfo).then((res => {
      let description = "";
      res.data.flavor_text_entries.some((flavor => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
        }
      }));

      const egggroups = res.data["egg_groups"]
        .map((group => {
          return group.name[0].toUpperCase() + group.name.slice(1);
        }))
        .join(", ");

      this.setState({
        egggroups: egggroups,
        description: description,
      });
    }));

    this.setState(
      {
        name: name,
        image: resImage,
        id: response.data.id,
        height: height,
        weight: weight,
        types: types,
        stats: {
          hp,
          attack,
          defense,
          speed,
          spAtk,
          speDef,
        },
        abilities,
      },
      () => console.log(this.state)
    );
  }

  render() {

    return (
      <div className="info">
        
        <Link to="/">
          <div className="container">
            <svg
              className="bi bi-arrow-left mt-3 text-secondary"
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>

       {this.state ?(
          <div className="card mb-3 contenedor">
          <div className="card-header">
            <div className="row m-0">
              <div className="cold-5">
                <h5>{this.state.id}</h5>
              </div>

              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map((type) => (
                    <p
                      key={type}
                      className="badge badge-pill mr-1"
                      style={{
                        color: "black",
                      }}
                    >
                      {type}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters m-0 p-4">
            <div className="col-md-3 m-0 mx-auto">
              <img
                src={this.state.image}
                className="card-img imagePokemon"
                alt={`Pokemon ${this.state.id}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body ml-5 p-0">
                <h5 className="card-title">{this.state.name}</h5>
                <div className="">
                  <p className="card-text p-0 m-0">HP</p>
                  <div className="progress mb-2 mr-0 col-8 p-0 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${this.state.stats.hp}%`,
                        // backgroundColor: `#${this.state.themeColor}`
                      }}
                    >
                      <small>{this.state.stats.hp}</small>
                    </div>
                  </div>

                  <p className="card-text p-0 m-0">Attack</p>
                  <div className="progress mb-2 mr-0 col-8 p-0 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${this.state.stats.attack}%`                  
                      }}
                    >
                      <small>{this.state.stats.attack}</small>
                    </div>
                  </div>

                  <p className="card-text p-0 m-0">Defense</p>
                  <div className="progress mb-2 mr-0 col-8 p-0 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${this.state.stats.defense}%`
                        // backgroundColor: `#${this.state.themeColor}`
                      }}
                    >
                      <small>{this.state.stats.defense}</small>
                    </div>
                  </div>

                  <p className="card-text p-0 m-0">Speed</p>
                  <div className="progress mb-2 mr-0 col-8 p-0 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${this.state.stats.speed}%`,
                      }}
                    >
                      <small>{this.state.stats.speed}</small>
                    </div>
                  </div>

                  <p className="card-text p-0 m-0">Sp Atk</p>
                  <div className="progress mb-2 mr-0 col-8 p-0 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${this.state.stats.spAtk}%`,
                        // backgroundColor: `#${this.state.themeColor}`
                      }}
                    >
                      <small>{this.state.stats.spAtk}</small>
                    </div>
                  </div>

                  <p className="card-text p-0 m-0">Sp Def</p>
                  <div className="progress mb-2 mr-0 col-8 p-0 ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${this.state.stats.speDef}%`,
                        // backgroundColor: `#${this.state.themeColor}`
                      }}
                    >
                      <small>{this.state.stats.speDef}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-text mt-3">{this.state.description}</p>
          </div>
          <hr />

          <div className="card-body">
            <h5 className="card-title text-center">Profile</h5>
            <div className="row m-0">
              <div className="col-md-6">
                <div className="row m-0">
                  <div className="col-6">
                    <h6 className="float-right">Height:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.height} cm.</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-right">Weight:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.weight} kg.</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row m-0">
                  <div className="col-6">
                    <h6 className="float-right">Egg Groups:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.egggroups} </h6>
                  </div>

                  <div className="col-6">
                    <h6 className="float-right">Abilities:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.abilities}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       ):(<>
        <img className="loading justify-content-center" src={require('../../images/pokeball.gif')} alt="Cargando Pokemón"/>
       {/* <h5 className="m-5 text-center">Cargando Pokemon</h5> */}
       </>)}
      </div>
    );
  }
}
export default CharacterInfo;
