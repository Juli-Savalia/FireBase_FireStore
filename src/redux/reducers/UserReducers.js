let initialState = {
  data: [],
  err: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "adduser":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "addusererr":
      return {
        ...state,
        err: action.payload,
      };
    case "viewuser":
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    case "viewusererr":
      return {
        ...state,
        err: action.payload,
      };
    case "deleteUser":
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default UserReducer;
