import React from 'react';
import InputConverter from './InputConverter';

class CalculatorConverter extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = { value: '' };
  // }

  render() {
    return (
      <>
        <InputConverter type="e" />
        <InputConverter type="d" />
      </>
    );
  }
}

export default CalculatorConverter;
