import React, { Component } from 'react'
import "../../Styles/layout.css"

 class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center mt-5">
                Made by Laura Osorio with help from <a href="https://pokeapi.co/" target="_blank"  rel="noopener noreferrer"> <b>PokeApi</b></a>
            </footer>
        )
    }
}

export default Footer