import { combineReucers } from '@redux/core';

import { loadingReducer, initialState as loadingInitialState } from './loading';

const combinedReducer = combineReucers({
  loading: loadingReducer,
});

const initialStates = {
  loading: loadingInitialState,
};

const rootReducer = (state = initialStates, action) => {
  console.log('state : ', state);
  console.log('action : ', action);
  return combinedReducer(state, action);
};

export default rootReducer;
