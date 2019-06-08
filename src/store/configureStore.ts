/* eslint-disable global-require */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ApplicationState from './ApplicationState';
import appReducers from './reducers';
import initialState from './initialState';

const configureStore = (
   preloadedState: Partial<ApplicationState> = initialState,
) => {
   const REDUX_DEVTOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
   const isDev = process.env.NODE_ENV !== 'production';
   const allReducers = combineReducers({ ...appReducers });
   const middlewares = [];

   // Add immutable-state middleware for development only
   if (isDev) {
      middlewares.unshift(require('redux-immutable-state-invariant').default());
   }

   const isWindowDefined =
      typeof window === 'undefined' && !isDev
         ? null
         : (window as ExtendedWindow & { [REDUX_DEVTOOLS]: () => any });

   const composeEnhancers =
      (isWindowDefined && isWindowDefined[REDUX_DEVTOOLS]) || compose;

   const composeMiddleware = composeEnhancers(applyMiddleware(...middlewares));

   return createStore(allReducers, preloadedState, composeMiddleware);
};

export default configureStore;
