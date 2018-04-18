import React, { Component } from 'react';
import './App.css';
import ListCard from './component/ListCard'
import Form from './component/Form'

class App extends Component {
  state = {
    data:[
    ]
  }
  //onSubmit está a referencia do que foi enviado do form
  addNewCardMyApp = (event) =>{
    //pega o estado anterior e set com o novo
    this.setState(prevState =>({
      data: prevState.data.concat(event)
    }))
  }
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCardMyApp} />
        <ListCard card={this.state.data} />
      </div>
    );
  }
}

export default App;
