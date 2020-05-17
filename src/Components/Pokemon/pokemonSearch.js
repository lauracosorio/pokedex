import React, { Component } from "react";

class pokemonSearch extends Component {
  render() {
    return (
      <div className="row mtop ">
        <div className="col justify-content-center">
          <form className="">
            <div className="form-group">
              <input
                onChange={this.props.onChangeFiltro}
                className="form-control col-8 col-md-6 col-lg-5"
                type="text"
                placeholder="Search for pokemon"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default pokemonSearch;
