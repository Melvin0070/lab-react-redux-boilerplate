function State() {
    return {
      count: 0,
    };
  }
  
  const Reducer = (state = State(), action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        }
      case "DECREMENT":
        return {
          count: state.count - 1,
        }
  
      default:
         return state;
    }
  };
  
  export default Reducer;