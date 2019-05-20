import React from 'react';

export const initialState: State =
  {
    user: {
      name: 'you.',
      email: '',
      password: ''
    }
  }

export const Context = React.createContext();
