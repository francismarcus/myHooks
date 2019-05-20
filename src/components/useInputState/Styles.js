import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  padding: 7.5px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background: #3797F0;
`
const Form = styled.form`
width: 560px;
min-height: 10vh;
display: block;
background-color: #f7f7f7;
padding: 55px 55px 55px 55px;
`
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`

export { Button, Form, Input };
