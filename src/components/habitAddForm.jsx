import React, { memo } from 'react';
const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지
    const name = inputRef.current.value; // input에 작성한값을 저장
    name && props.onAdd(name); //
    inputRef.current.value = ''; // 초기화 시키는방법
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
