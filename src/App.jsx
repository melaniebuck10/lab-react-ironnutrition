import React, { Component } from 'react';
import './App.scss';
import meals from './meals.json';
import MealBox from './components/MealBox';


class App extends Component {
  state = {
    allMeals: meals,
  }
  render() {
    return (
      <div className="App">
        {this.state.allMeals.map(meal => {
          return (
            <MealBox name={meal.name} calories={meal.calories} image={meal.image}/> 
          )
        })}
      </div>
    );
  }
}

export default App;
