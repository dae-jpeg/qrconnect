import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/Store';
import Spinner from './views/spinner/Spinner';
import './utils/i18n';
import './_mockApis';
import { AuthProvider } from 'src/guards/firebase/FirebaseContext';

//import { AuthProvider } from 'src/guards/jwt/JwtContext';
//import { AuthProvider } from 'src/guards/auth0/Auth0Context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
