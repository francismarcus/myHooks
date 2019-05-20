import React, { useContext } from 'react';
import useInputState from 'components/useInputState/useInputState'
import { Context } from 'components/useInputState/store';
import { Input, Form, Button } from 'components/useInputState/Styles';

const Example = () => {
  const { state, dispatch } = useContext(Context);
  const [name, updateName, resetName] = useInputState('');
  const [email, updateEmail, resetEmail] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: 'USER',
      payload: {name, email, password}
    });
    resetEmail();
    resetPassword();
    resetName();
  };

  return (
    <>
      <Form>
        <Input
          type='text'
          placeholder='name'
          value={name}
          onChange={updateName} />
        <Input
          type='text'
          placeholder='email'
          value={email}
          onChange={updateEmail} />
        <Input
          type='text'
          placeholder='password'
          value={password}
          onChange={updatePassword} />
        <Button
          onClick={handleSubmit}> Submit
        </Button>
            <h1> Hello, {state.user.name} </h1>
      </Form>

    </>
  )
}
export default Example;
