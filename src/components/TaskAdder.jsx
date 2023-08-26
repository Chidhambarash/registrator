import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const defaultTheme = createTheme();
export default function TaskAdder() {
    const [task, setTask] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('task')!== ""){
    setTask([...task, data.get('task')]);
    }
    

  };
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
            Add Your tasks here
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="task"
              label="Add Task"
              name="task"
              autoFocus
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Add Tasks
            </Button>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {task.map((value) => (
    <ListItem
      key={value}
      disableGutters
    >
      <ListItemText primary={`${value}`} />
    </ListItem>
  ))}
</List>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );}
