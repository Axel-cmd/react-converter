import React from 'react';

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
    return (
      <div>
        <label>Entrez une valeur en {this.props.type} : </label>
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
