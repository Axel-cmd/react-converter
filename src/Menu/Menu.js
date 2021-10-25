import React from 'react';
import { Button } from '@material-ui/core';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(value) {
    this.props.onChangeValue(value);
  }

  render() {
    return (
      <div>
        <Button
          style={{ marginLeft: '20%' }}
          variant="contained"
          onClick={() => this.onChange(1)}
        >
          Devise
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: '20%' }}
          onClick={() => this.onChange(2)}
        >
          Distance
        </Button>
      <Button
      variant="contained"
      style={{ marginLeft: '20%' }}
      onClick={() => this.onChange(3)}
      >
        Poids
      </Button>
      </div>
    );
  }
}
