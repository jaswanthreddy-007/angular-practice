import { createReducer, on } from '@ngrx/store';
import { inc } from './counter.action';

export interface counterstate {
  count: number;
}

export const initialstate: counterstate = {
  count: 0,
};

export const counterreducer = createReducer(initialstate, on(inc, state=>({...state, count:state.count+1})));
