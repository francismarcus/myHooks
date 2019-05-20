// @flow

type State = {
  user: Array<{
    name: string,
    email: string,
    password: string,
  }>
};

type Action = {
  type: "USER"; payload: Array<any>;
};

const Reducer = (state: State, action: Action): State => {
    switch (action.type) {

      case "USER":
        return {...state,
               user: action.payload
            }
      default:
        return state;
    }
  };

  export default Reducer
