import React from 'react';
import './App.css';
import ListOfTypes from './ListOfTypes';
import ListOfRestaurants from './ListOfRestaurants';
import ListOfMenuItems from './ListOfMenuItems';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      typeOfRest: '',
      nameOfRest: ''
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ListOfTypes restaurantChooser={this._fetchMeRestaurants} />
          {this.state.typeOfRest? <ListOfRestaurants restType={this.state.typeOfRest} handHand={this._fetchMeMenu} /> : <></>}
          {this.state.nameOfRest? <ListOfMenuItems menuChoice={this.state.nameOfRest} restType={this.state.typeOfRest} /> : <></>}
        </header>
      </div>
    );
  }

  _fetchMeRestaurants = (e) => {
    this.setState({
        typeOfRest: e.target.value,
        nameOfRest: ''

    });
  }
  _fetchMeMenu = (e) => {
    this.setState({
        nameOfRest: e.target.value
    });
  }
}

export default App;

