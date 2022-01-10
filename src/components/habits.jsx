import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  }; //어느 특정한 습관이 카운트가 증가되면 그 숩관값이 증가해야하기때문에 habit이라는 인자를 받는다.

  handleDecrement = (habit) => {
    this.props.onDecrement(habit); // props에 전달된 onDecrement 의 habit을 전달해줍니다.
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  handleReset = (habit) => {
    this.props.onReset(habit);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
            /> //각각의 습관데이터를 habit컴포넌트에 연결
          ))}
        </ul>
        <button className="habits-reset" onClick={this.handleReset}>
          ResetAll
        </button>
      </>
    );
  }
}

export default Habits;
