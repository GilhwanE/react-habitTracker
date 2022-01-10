import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 }, // 여기있는 아이템들을 새로운 배열로 복사해 만드는것
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
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

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]; // 배열을 복사 ( 하나하나씩 )
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        // 습관 카운트가 0이 아닐때면 카운트를 0로 바꿔준다 reset 시켜준다.
        return { ...habit, count: 0 };
      }
      return habit; // habit 반환해준다. ( 취업 준비생 --)
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
          // filter사용한이유는 현재 등록된 모든 습관을 모두 표기하려면 filter없이 그냥 배열의 사이즈만 표기하면 된다,
          //  전체의 습관 보다는, 현재 count가 하나 이상인 아이들의 갯수만 보여 주고 싶어요 😊
          // 그래서 배열의 전체적인 사이즈 보다는, 배열안의 habit중 count가 0보다 큰 아이들을 filter (걸러서) 그들의 숫자만 보여주는거예요
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
export default App;
