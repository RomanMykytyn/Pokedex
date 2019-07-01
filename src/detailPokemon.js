import React from 'react';
import ReactDOM from 'react-dom';

class DetailPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
        
    };
  }


  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div className='detail'>
        <img src={this.props.pokemon.sprites.front_default} />
        <h3>{this.capitalize(this.props.pokemon.name)} #{this.props.pokemon.id}</h3>
        <table className='table'>
        <tbody>
          <tr><td>Type</td><td>{this.props.pokemon.types.map(el =>
             <span key={el.type.name}>{el.type.name} </span>)}</td>
          </tr>

          {this.props.pokemon.stats.map(el =>
            <tr key={el.stat.name}>
              <td>{this.capitalize(el.stat.name)}</td>
              <td>{el.base_stat}</td>
            </tr>)}

          <tr><td>Weight</td><td>{this.props.pokemon.weight}</td></tr>
          <tr><td>Total moves</td><td>{this.props.pokemon.moves.length}</td></tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default DetailPokemon;
