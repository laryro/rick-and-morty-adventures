import React, { Component } from "react";
import axios from "axios";

const URL_API = 'https://rickandmortyapi.com/api/';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
        }
    }
    async componentDidMount() {
        const response = await axios.get(`${URL_API}character`);
        const results = response.data.results;
        this.setState({
            characters: results,
        })
        console.log(results);
    }

    renderCharacters() {
        const { characters } = this.state;
        const chars = characters.map((character) => {
            return (
                <li>
                    <img src={character.image} alt={character.name} />
                    <p>{character.name}</p>
                </li>
            )
        });
        return chars;
    }

    render() {
        return (
            <div className="character-list">
            <ul>
                {
                    this.renderCharacters()
                }
            </ul>
            </div>
        )
    }
}

export default CharacterList;
