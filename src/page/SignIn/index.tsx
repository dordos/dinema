import React, { useCallback, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import './style.scss';

const logo = require('../../img/logo.png');
const SignIn = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useInput('');

  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [aniState, setAniState] = useState([false, false, false, false]);

  const focusState = (e: any) => {
    setAniState((state): any => {
      if (e.target.value != '') {
        return state;
      }
      return !state;
    });
  };

  const inFocus = (e: any) => {
    e.preventDefault();

    // console.log(e);
    // if (
    //   (e.target.name == 'nickname' &&
    //     e.target.previousSibling.className == '') ||
    //   e.target.previousSibling.className == 'inputOffFocus'
    // ) {
    //   e.target.previousSibling.className = 'inputOnFocus';
    // }
  };

  const outFocus = (e: any) => {
    // if (
    //   e.target.name == 'nickname' &&
    //   e.target.value == '' &&
    //   e.target.previousSibling.className == 'inputOnFocus'
    // ) {
    //   e.target.previousSibling.className = 'inputOffFocus';
    // }
  };

  const onChangePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  // surbmit
  const onsSubmit = () => {};

  // const focusState = (e: any) => {
  //   e.target.previousSibling.className = 'inputOnFocus';
  // };

  // const offFocus = (e: any) => {
  // if ((e.target.value = '')) {
  // e.target.previousSibling.className = 'inputOffFocus';
  // }
  // };

  return (
    <div className='signIn'>
      <div className='signInContainer'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <div className='signIn-title'>
          <h1>Sign In</h1>
        </div>

        <Form onSubmit={onsSubmit}>
          <div className='infoContainer'>
            <label>
              <span>?????????</span>
              <input
                type='email'
                name='email'
                onFocus={focusState}
                onBlur={focusState}
                onChange={onChangeEmail}
                value={email}
              />
              <p>????????? ?????? ????????? ????????? ??????????????????</p>
            </label>

            <label onFocus={inFocus} onBlur={outFocus}>
              <span>????????????</span>
              <input type='password' name='password' value={password} onChange={onChangePassword} />
              <p>??????????????? 8?????? ???????????? ??????????????????.</p>
            </label>

            <button>????????????</button>
          </div>
        </Form>

        <div className='suggestion'>
          <p>
            ?????? ????????? ????????????????
            <Link to='/SignUp'>
              <span>???????????? ????????????</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
