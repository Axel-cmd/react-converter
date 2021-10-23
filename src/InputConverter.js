import React from 'react';

const inputNames = {
  e: "Euro",
  d: "Dollar"
}

class InputConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {

    const name = this.props.type;

    return (
      <div>
        <label>Entrez une valeur en {inputNames[name]} : </label>
        <input
          type="number"
          onChange={(e) => this.handleChange(e)}
          value={this.state.value}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default InputConverter;
