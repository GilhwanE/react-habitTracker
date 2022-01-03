import React from 'react';
import './app.css';
import { Component } from 'react';
import Habits from './components/habits';

class App extends Component {
  handleCreament = () => {
    this.props.onIncrement(this.props.habit);
    // habit에 있는 state 상태를 가져와야함.
  };
  render() {
    return (
      <div>
        <nav>
          <h2>Navbar</h2>
          <input className="input_filed" type="text" />
          <Habits
            className="btn_add"
            type="submit"
            onIncrement={this.handleCreament}
          >
            Add
          </Habits>
        </nav>

        <footer>
          <button typee="submit">Reset All</button>
        </footer>
      </div>
    );
  }
}
export default App;
