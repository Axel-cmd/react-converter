import React from 'react';
import './app.css';
import CalculatorConverter from '../converterDevise/CalculatorConverter';
import CalculatorDistance from '../converterDistance/CalculatorDistance';
import CalculatorPoids from '../converterPoids/CalculatorPoids'
import Menu from '../Menu/Menu';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      devise: 1
    }
  }

  handleChange(e)
  {
    this.setState({
      devise: e
    })
  }

  render()
  {

    var element;
    if(this.state.devise == 1){
      element = <CalculatorConverter />
    }else if (this.state.devise == 2){
      element = <CalculatorDistance />
    }
    else{
      element =  <CalculatorPoids/>
    }

    return (
      <div>
        <h1>Application de conversion</h1>
        <Menu onChangeValue={(e)=> this.handleChange(e)}/>
        
        {element}
       
      </div>
    );
  }
}

