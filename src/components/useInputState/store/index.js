// @flow
import React from 'react';

type State = {
  user: Array<{
    name: string,
    email: string,
    password: string,
  }>
};

export const initialState: State =
  {
    user: {
      name: 'you.',
      email: '',
      password: ''
    }
  }

export const Context = React.createContext<any>();
