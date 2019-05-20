import React, { useReducer } from 'react';
import Example from 'components/useInputState/Example';
import { initialState, Context } from 'components/useInputState/store';
import Reducer from 'components/useInputState/reducers';

export default function AppContainer() {
const [state, dispatch] = useReducer(Reducer, initialState);

return (
<Context.Provider value={{ state, dispatch }}>
  <>
  <Example />
  </>
  </Context.Provider>
  )
}
