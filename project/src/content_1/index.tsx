import * as React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';

import { Base } from './components/';

// let store = createStore(counterApp)

ReactDOM.render(
    // <Provider store = {store}>
        <Router>
            {/* <Base compiler="TypeScript" framework="React"/> */}
            <Base />
        </Router>
    // </Provider>    
    ,
    document.getElementById("app")
);
