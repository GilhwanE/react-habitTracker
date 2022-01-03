import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 }, // 여기있는 아이템들을 새로운 배열로 복사해 만드는것
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits]; // 기존 habits를 배열로 만들꺼야. ... 여기있는 아이템들을 새로운 배열로 복사해 만드는것
    const index = habits.indexOf(habit); // index는 이 해빗안에 몇번째에 있는지 확인 하기 위함.
    habits[index].count++; //배열에 해당하는 이 오브젝트에 있는 count를 증가 시켜 준다.
    this.setState(this.state);
  }; //어느 특정한 습관이 카운트가 증가되면 그 숩관값이 증가해야하기때문에 habit이라는 인자를 받는다.

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count < 0 ? 0 : habits[index].count) {
      habits[index].count--;
    }
    this.setState(this.state);
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id); // 배열에는 filter라는 내장함수가 있다. filter의 기능은
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> //각각의 습관데이터를 habit컴포넌트에 연결
        ))}
      </ul>
    );
  }
}

export default Habits;
