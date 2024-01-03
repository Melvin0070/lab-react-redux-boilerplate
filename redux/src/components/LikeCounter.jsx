import React, { useState, useEffect } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Redux/Reducer';
import { incrementLike, decrementLike } from './Redux/Actions';

const newstore = configureStore({
    reducer: Reducer,
  })
  
  const LikeCounter = () => {
    const [count, setCount] = useState(newstore.getState().count)
  
useEffect(() => {
    const unsubscribe = newstore.subscribe(() => {
        setCount(newstore.getState().count)
      })
  
      return () => unsubscribe()
    }, [])

  const handleIncrement = () => {
    newstore.dispatch(incrementLike())
  };

  const handleDecrement = () => {
    newstore.dispatch(decrementLike())
    console.log(count)
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default LikeCounter;

