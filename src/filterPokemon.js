import React from 'react';
import ReactDOM from 'react-dom';

class FilterPokemon extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }


  handleFilterChange(event) {
    this.props.updateCheck(event.target.name, event.target.checked);
  }


  render() {
    return (
      <label><input type="checkbox" name={this.props.name} onChange={this.handleFilterChange} defaultChecked />{this.props.name}<br /></label>
    );
  }
}

export default FilterPokemon;
