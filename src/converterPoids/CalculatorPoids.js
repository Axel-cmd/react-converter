import React from 'react';
import PoidsInput from './poidsInput';

const divStyle={
  textAlign: "center",
  marginTop: "100px"
}

//Valeur de 1 kilogramme en gramme
const changeRate = 1000;

//fonction de change kilogramme en gramme
function grammeToKilogramme(gramme){
  return gramme / changeRate;
}

function kilogrammeToGramme(gramme){
  return gramme * changeRate;
}


function conversion(value, convert){
  //transformer la valeur en float car on recoit un string de base et nous on veut pour le traitement avoir un float
  const input = parseFloat(value);
  // vérifie que le contenu de la variable est bien un nombre
  if(Number.isNaN(input)){
    return '';
  }
  //récupérer la valeur après la conversion arrondi à 2 chiffres après la virgule
  const output = Math.round(convert(input) * 1000)/1000;
  //on retourne la valeur finale en string avec la méthode toString()
  return output.toString(); 
}


class CalculatorConverter extends React.Component {

  constructor(props){
    super(props)
    //le state ici permettra de garder la valeur taper ainsi que l'input dans lequel elle a été rentrée
    this.state = { 
      value : '',
      name : 'k'
     };
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input kilogramme
  handleKiloChange(value) {
    this.setState({name: 'k', value})
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input gramme
  handleGrammeChange(value) {
    this.setState({name: 'g', value})
  }

  render() {
    //Etat
    const name = this.state.name;
    const value = this.state.value;

    //stocker les valeurs dans des variables qui seront passé en props au composant 
    const kilogramme = name === 'g' ? conversion(value, grammeToKilogramme) : value; // si le state.name est égale à k on convertis sinon on affiche tel quel
    const gramme = name === 'k' ? conversion(value, kilogrammeToGramme) : value;// si le state.name est égale à g on convertis sinon on affiche tel quel

    return (
      <div style={divStyle}>
        <PoidsInput type="k" value={kilogramme} onValueChange={(k)=>this.handleKiloChange(k)}/>

        <PoidsInput type="g" value={gramme} onValueChange={(k)=>this.handleGrammeChange(k)}/>
      </div>
    );
  }
}


export default CalculatorConverter;
