import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore();

root.render(
  <Provider store={store}>
    <div className="wrapper">
      <div className="content">
        <App />
      </div>
      {/* footer */}
    </div>
  </Provider>,
);

reportWebVitals();
