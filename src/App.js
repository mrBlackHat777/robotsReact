import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/cardList/cardList.components'
import {SearchBox} from './components/searchBox/searchBox.components'
class App extends Component {

  constructor(){
    super(); //call the constructor method on the component class to give us access to the state
    this.state={
      monsters:[ ],
      searchField:''
    }
  // this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  handleChange=(e)=>{ 
    this.setState({searchField:e.target.value})
  }
  render() {
    // //anonymous function
    const {monsters,searchField}=this.state;
    const filteredMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
    <div className="App">
      <h1>Monsters</h1>
      <SearchBox placeHolder={'search monster'} handleChange={this.handleChange}/>
      <CardList monsters={filteredMonster}> </CardList>
    </div>
    );
  }
}

export default App;
