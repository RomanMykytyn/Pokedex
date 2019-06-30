import React from 'react';
import ReactDOM from 'react-dom';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class TilePokemon extends React.Component {
  constructor() {
    super();
    this.state = {
        pokemon: {},
        check: true,
    };
  }

  componentDidMount() {
    P.getPokemonByName(this.props.name)
    .then( response => {
      console.log(response);
      if (response.types.every(el => this.props.listChecked[el.type.name] === false)) {
        this.setState({
          check: false
        });
      }
      return this.setState({
        pokemon: response
      });
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  }



  render() {
    return (
      <div className='tile'>
        {this.state.pokemon.sprites ? (
          <><img src={this.state.pokemon.sprites.front_default} />
            {this.state.pokemon.name}
            {this.state.pokemon.id}
            {this.state.check}</>
          ) : (
            'Loading....'
          )
        }

      </div>
    );
  }
}

export default TilePokemon;
