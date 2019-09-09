import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from "react-redux";

import '../styles/main.scss';
import '../resources/icon_fonts/icofont/icofont.min.css';

import { store } from "./store/store";
import { updateStore } from './actionCreators/actionCreator';

//Async action creator. For example fetch API
const asyncFunc = () => {
    return dispatch => {
        setTimeout(() => {
            console.log('Delay dispatching!');
            dispatch({type: "updateMain", phones: ["iPhone 7 Plus", "Samsung Galaxy", "Huawei Honor P30"]});
            console.log(store.getState());
        }, 3000);
    }
};

store.dispatch(asyncFunc());

//Sync action creator
//store.dispatch(updateStore(["iPhone 7 Plus", "Samsung Galaxy", "Huawei Honor P30"]));


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