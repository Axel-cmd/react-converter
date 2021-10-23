import React from 'react';

const inputNames = {
  e: 'Euro',
  d: 'Dollar',
};

class InputConverter extends React.Component {
  handleChange(event) {
    //à la place de setState on doit appelé une méthode qui sera donnée en props par CalculatorConverter
    this.props.onValueChange(event.target.value);
  }

  render() {
    //récupérer le type de devise entré : euros ou dollar
    const name = this.props.type;

    //on utilise le props pour la valeur et non plus le state car la valeur sera passé par l'ancetre commun au input
    const value = this.props.value;

    return (
      <>
        <div>
          <label>Entrez une valeur en {inputNames[name]} : </label>
          <input
            type="number"
            onChange={(e) => this.handleChange(e)}
            value={value}
          />
        </div>
        <br />
      </>
    );
  }
}

export default InputConverter;
