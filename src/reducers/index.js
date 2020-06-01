import { combineReducers } from 'redux';
import entries from './entriesReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  entries,
});

export default rootReducer;
