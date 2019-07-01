import React from 'react';
import ReactDOM from 'react-dom';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class TilePokemon extends React.Component {
  constructor() {
    super();
    this.state = {
        pokemon: {},
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  componentDidMount() {
    P.getPokemonByName(this.props.name)
    .then( response => {
      console.log(response);
      return this.setState({
        pokemon: response
      });
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  }

  handlerClick() {
    this.props.clickPokemon(this.state.pokemon)
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  render() {

    let obj = this.state.pokemon.types;
    if (obj && obj.some(el => this.props.listChecked[el.type.name] === true)) {
    return (

        <div className='tile' onClick={this.handlerClick}>
            <img src={this.state.pokemon.sprites.front_default} />
              <p>{this.capitalize(this.state.pokemon.name)}</p>
                <div>
                  {this.state.pokemon.types.map(el =>
                    <span className='type' key={el.type.name}>{el.type.name}</span>
                  )}
                </div>
        </div>

    );
  }
  else {
    return (null)
  }
  }
}

export default TilePokemon;
