import { ReducersMapObject } from 'redux';
import ApplicationState from './ApplicationState';
import tempReducer from './Temporary/reducers';

const reducers: ReducersMapObject<ApplicationState> = {
   temp: tempReducer,
};

export default reducers;
