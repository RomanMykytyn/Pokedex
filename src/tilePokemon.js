import React from 'react';
import ReactDOM from 'react-dom';

class TilePokemon extends React.Component {
  constructor() {
    super();
    this.state = {
        modalIsOpen: false,
    };
  }

  componentDidMount() {}



  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default TilePokemon;
