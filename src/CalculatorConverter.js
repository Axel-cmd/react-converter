import React from 'react';
import InputConverter from './InputConverter';

const changeRate = 0.85885;

function euroToDollar(euro){
  return euro / changeRate;
}

function dollarToEuro(dollar){
  return dollar * changeRate;
}

function conversion(value, convert){
  const input = parseFloat(value);
  if(Number.isNaN(value)){
    return '';
  }

  const output = convert(input);
  return output.toString(); 
}


class CalculatorConverter extends React.Component {

  constructor(props){
    super(props)
    //le state ici permettra de garder la valeur taper ainsi que l'input dans lequel elle a été rentrée
    this.state = { 
      value : '',
      name : 'e'
     };
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input euros
  handleEuroChange(value) {
    this.setState({name: 'e', value})
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input dollar
  handleDollarChange(value) {
    this.setState({name: 'd', value})
  }

  render() {
    //récupérer les états
    const name = this.state.name;
    const value = this.state.value;

    //stocker les valeurs dans des variables qui seront passé en props au composant 
    const euros = name === 'd' ? conversion(value, dollarToEuro) : value;
    const dollar = name === 'e' ? conversion(value, euroToDollar) : value;

    

    return (
      <>
        <InputConverter type="e" value={euros} onValueChange={(e)=>this.handleEuroChange(e)}/>
        <InputConverter type="d" value={dollar} onValueChange={(e)=>this.handleDollarChange(e)}/>
      </>
    );
  }
}


export default CalculatorConverter;
