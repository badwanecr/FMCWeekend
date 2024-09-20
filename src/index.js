import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CartProvider } from 'react-use-cart';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
