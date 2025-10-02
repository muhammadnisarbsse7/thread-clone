import { Button, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLoginMutation, useSigninMutation } from '../../src/redux/service';

const Register = () => {
  const _700 = useMediaQuery('(min-width:700px)');

  const [signinUser, signinUserData] = useSigninMutation()
  const [loginUser, loginUserData] = useLoginMutation()

  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };
  const handleLogin = async () => {
    const data = { email, password };
    console.log('Login', data);
    await loginUser(data)
  };
  const handleRegister = async () => {
    const data = { userName, email, password };
    await signinUser(data)
    // console.log('Register', data);
  };

  useEffect(() => {
    if (signinUserData.isSuccess) {
      console.log(signinUserData.data)
    }
    if (loginUserData.isSuccess) {
      console.log(loginUserData.data)
    }
  }, [signinUserData.isSuccess, loginUserData.isSuccess])
  return (
    <>
      <Stack
        width={'100%'}
        height={'100vh'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={
          _700
            ? {
              backgroundImage: 'url("/register-bg.webp")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 600px',
            }
            : null
        }
      >
        <Stack flexDirection={'column'} width={_700 ? '40%' : '90%'} gap={2} mt={_700 ? 20 : 0}>
          <Typography
            variant="h5"
            fontSize={_700 ? '1.5rem' : '1rem'}
            fontWeight={'bold'}
            alignSelf={'center'}
          >
            {login ? 'Login with email' : 'Register with email'}
          </Typography>
          {login ? null : (
            <TextField
              variant="outlined"
              placeholder="Enter userName"
              onChange={(e) => setUserName(e.target.value)}
            ></TextField>
          )}

          <TextField
            variant="outlined"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button
            size="large"
            sx={{
              width: '100%',
              height: 52,
              bgcolor: 'green',
              color: 'white',
              fontSize: '1rem',
              ':hover': { bgcolor: 'blue', cursor: 'pointer' },
            }}
            onClick={login ? handleLogin : handleRegister}
          >
            {login ? 'Login' : 'Sign Up'}
          </Button>
          <Typography variant="subtitle2" fontSize={_700 ? '1.3rem' : '1rem'} alignSelf={'center'}>
            {login ? 'Dont have an Account' : 'Already have an account?'}{' '}
            <span className="login-link" onClick={toggleLogin}>
              {login ? 'Sign up' : 'Login'}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
