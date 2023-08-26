import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import allReducers from './redux/reducers';
import {  Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm';

const store = configureStore({
  reducer:allReducers});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route path="/register" element={ <SignInForm /> }>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
