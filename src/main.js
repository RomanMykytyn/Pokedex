import React from 'react';
import ReactDOM from 'react-dom';
import TilePokemon from './tilePokemon';
import FilterPokemon from './filterPokemon'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        listPokemon: [],
        offset: 1,
        listType: [],
        listChecked: {},
    };
    this.loadMore = this.loadMore.bind(this);
  }

componentDidMount() {
    this.loadMore();
    P.getTypesList({limit: 100, offset: 1})
      .then( response => {
        console.log(response.results);
        let obj = {};
        response.results.forEach(el => obj[el.name] = true);
        this.setState({
          listType: response.results,
          listChecked: obj,
        });


        console.log(this.state.listChecked);
      })
  }

loadMore() {
  P.getPokemonsList({limit: 17, offset: this.state.offset})
    .then( response => {
      console.log(response.results);
      this.setState({
        listPokemon: this.state.listPokemon.concat(response.results),
        offset: this.state.offset + 18
      });
    })
}


  render() {
    return (<div className='main'>
              <div className='listPokemon'>
                {this.state.listPokemon.map(el => (<TilePokemon name={el.name}
                                                                url={el.url}
                                                                listChecked={this.state.listChecked}
                                                                key={Number(el.url.match(/\d+/g)[1])} />))}
                <div className='loadMore'>
                  <button className='btn' onClick={this.loadMore}>Load More.</button>
                </div>
              </div>
              <div className='rightBar'>
                <div className='filter'>
                  <h3>Filter by types:</h3>
                  <div className='listFilter'>
                    {this.state.listType.map(el => (<FilterPokemon name={el.name}
                                                                   key={Number(el.url.match(/\d+/g)[1])} />))}
                  </div>
                </div>
              </div>
            </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
