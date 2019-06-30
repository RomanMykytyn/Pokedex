import React from 'react';
import ReactDOM from 'react-dom';

class FilterPokemon extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {}



  render() {
    return (
      <label><input type="checkbox" name={this.props.name} defaultChecked />{this.props.name}<br /></label>
    );
  }
}

export default FilterPokemon;
