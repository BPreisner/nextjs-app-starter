import { AnyAction } from 'redux';
import { tempActionTypes, TempState } from './constants';

const tempReducer = (state: TempState = {}, action: AnyAction): TempState => {
   switch (action.type) {
      case tempActionTypes.TICK:
         return Object.assign({}, state, {
            property1: 'abcd',
         });
      case tempActionTypes.ADD:
         return Object.assign({}, state, {
            property1: 'efgh',
         });
      default:
         return state;
   }
};

export default tempReducer;
