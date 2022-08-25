import {legacy_createStore as createStore} from 'redux';

import routeReducer from './modules/example/routeReducer';

const store = createStore(routeReducer);

export default store;