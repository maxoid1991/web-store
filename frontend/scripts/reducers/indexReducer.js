import { combineReducers } from 'redux';

import { MainPageReducer } from './reducerMainPage';
import { CatalogPageReducer } from './reducerCatalogPage';

const IndexReducer = combineReducers({
    MainPageReducer,
    CatalogPageReducer
});

export { IndexReducer };