const initialState = { coins: null };

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_LOCAL_DB":
      return { coins: action.payload };
    default:
      return state;
  }
};

export default coinReducer;
