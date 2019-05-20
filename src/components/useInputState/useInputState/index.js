import { useState } from 'react';

export default initialState => {
  const [value, setValue] = useState(initialState);
  const handleInputChange = event => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue(initialState);
  };
  return [value, handleInputChange, reset];
};
