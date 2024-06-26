/* Core */
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createStore, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

/* Instruments */
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import rootReducers from './reducers/rootReducers';

/* Remove composeWithDevTools when release */
/* Store */
export const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk)),
  );

/* Types */
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducers>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;