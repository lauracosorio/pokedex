import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterList from "./Components/Pokemon/pokemonList"
import CharacterInfo from "./Components/Pokemon/pokemonInfo"


class App extends Component {
    render() {
        return (
            <div>
<BrowserRouter>
<Switch>
    <Route exact path="/" component={CharacterList}/>
    <Route path="/Pokemon/:pokemonIndex" component={CharacterInfo}/>
</Switch>
</BrowserRouter>
            </div>
        )
    }
}

export default App