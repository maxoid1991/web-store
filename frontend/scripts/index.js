import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from "react-redux";

import '../styles/main.scss';

import { store } from "./store/store";
import { updateStore } from './actionCreators/actionCreator';
store.dispatch(updateStore(["iPhone 7 Plus", "Samsung Galaxy", "Huawei Honor P30"]));

import { Catalog } from './components/Catalog';
import Main from './components/Main';

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={Catalog}/>
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById("root"));