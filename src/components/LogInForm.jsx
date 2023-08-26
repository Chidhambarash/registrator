import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { validator } from '../helpers/validator';
import SignUp from './SignInForm';
import TaskAdder from './TaskAdder';

const defaultTheme = createTheme();
export default function LogInForm() {

  const userList = useSelector((state) => state.inputs.user);
    const [mobile, setMobile] = useState('');
    const [signup, setsignup] = useState(0);
    const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userList);
    if(validator(userList,mobile,password)==="Success"){
        setsignup(2);
        alert("logged in success");
    }
    else if(validator(userList,mobile,password)==="not found"){
      alert("No users found , please sign up ");
  }
  else{
    alert("Incorrect Password");
  };
}
if(signup===0){
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Mobile number"
              name="mobile number"
              value={mobile}
              onInput={ e=>setMobile(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onInput={ e=>setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick ={()=>{setsignup(1)}} variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );}else if(signup===1){
    return(
    <SignUp />
    )
  }else{
    return(
    <TaskAdder />
    )
    }}
