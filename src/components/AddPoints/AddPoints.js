import React from 'react';
import './AddPoints.css'

const AddPlayer = (props) => {
  let input;
  const onSubmit = (event) => {
    event.preventDefault();
    props.onPlayerAdd(input.value);
    input.value = '';
  }

  return (
    <form className='AddPlayer' onSubmit={onSubmit}>
      <input type='text' className='AddPlayer_input' ref={(node) => input = node} />
      <input type='submit' className='AddPlayer_submit' value='add new player' />
    </form>
  )
}