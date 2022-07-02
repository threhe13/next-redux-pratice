import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../saga';

const configureStore = (ctx) => {
  const sagaMiddleWare = createSagaMiddleware();
  const middleWares = [sagaMiddleWare];

  const store = createStore(rootReducer, compose());
  store.sagaTask = sagaMiddleWare.run(rootSaga);

  return store;
};
