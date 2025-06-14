import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { mypersistor, myStore } from './Project/Store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <PersistGate persistor={mypersistor}>
 <App />
    </PersistGate>
     
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
