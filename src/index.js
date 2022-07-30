import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId= "ab175fd1-6358-46b7-bc01-91cc36750306" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
document.getElementById('root')
); 