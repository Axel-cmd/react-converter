import React from 'react';
import InputConverter from './InputConverter';

class CalculatorConverter extends React.Component {
  render() {
    return (
      <>
        <InputConverter type="centimètre" />
        <InputConverter type="mètre" />
      </>
    );
  }
}

export default CalculatorConverter;
