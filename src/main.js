import React from 'react';
import ReactDOM from 'react-dom';
import TilePokemon from './tilePokemon'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        listPokemon: [],
    };
  }

  componentDidMount() {
    P.getPokemonsList({limit: 11, offset: 0})
      .then( response => {
        console.log(response.results);
        this.setState({
          listPokemon: response.results
        });
      })
  }



  render() {
    return (<div className='main'>
              <div className='listPokemon'>
                {this.state.listPokemon.map(el => (<TilePokemon name={el.name} url={el.url}  key='' />))}
              </div>
              <div className='rightBar'>
              </div>
            </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
