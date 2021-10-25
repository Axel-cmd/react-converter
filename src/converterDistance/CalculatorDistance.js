import React from 'react';
import InputConverter from './distanceInput';

const divStyle = {
  textAlign: 'center',
  marginTop: '100px',
};

//taux de change = valeur de 1 metre en centimètre
const changeRate = 100;

//fonction de change centimètre vers metre
function centimètreToMetre(centimètre) {
  return centimètre / changeRate;
}
//fonction de change metre vers centimètre
function metreToCentimètre(metre) {
  return metre * changeRate;
}

function conversion(value, convert) {
  //transformer la valeur en float car on recoit un string de base et nous on veut pour le traitement avoir un float
  const input = parseFloat(value);
  // vérifie que le contenu de la variable est bien un nombre
  if (Number.isNaN(input)) {
    return '';
  }
  //récupérer la valeur après la conversion arrondi à 2 chiffres après la virgule
  const output = Math.round(convert(input) * 100) / 100;
  //on retourne la valeur finale en string avec la méthode toString()
  return output.toString();
}

class CalculatorConverter extends React.Component {
  constructor(props) {
    super(props);
    //le state ici permettra de garder la valeur taper ainsi que l'input dans lequel elle a été rentrée
    this.state = {
      value: '',
      name: 'e',
    };
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input euros
  handleCentimètreChange(value) {
    this.setState({ name: 'e', value });
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input dollar
  handleMetreChange(value) {
    this.setState({ name: 'd', value });
  }

  render() {
    //récupérer les états
    const name = this.state.name;
    const value = this.state.value;

    //stocker les valeurs dans des variables qui seront passé en props au composant
    const centimètre =
      name === 'd' ? conversion(value, metreToCentimètre) : value; // si le state.name est égale à d on convertis sinon on affiche tel quel
    const metre = name === 'e' ? conversion(value, centimètreToMetre) : value; // si le state.name est égale à e on convertis sinon on affiche tel quel

    return (
      <div style={divStyle}>
        <InputConverter
          type="e"
          value={centimètre}
          onValueChange={(e) => this.handleCentimètreChange(e)}
        />
        <InputConverter
          type="d"
          value={metre}
          onValueChange={(e) => this.handleMetreChange(e)}
        />
      </div>
    );
  }
}

export default CalculatorConverter;
