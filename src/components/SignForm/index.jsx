import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState('als091212@naver.com');
  const [password, setPassword] = useState('abcdef');

  return (
    <>
      <input
        value={email}
        onInput={({ target: { value } }) => {
          setEmail(value);
        }}
      />
      <input
        value={password}
        onInput={({ target: { value } }) => {
          setPassword(value);
        }}
      />
      <button
        type="button"
        onClick={() => onSubmit({ email, password })}
      >
        sign-in
      </button>
    </>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
