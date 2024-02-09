import { createSelector } from '@ngrx/store';
import { appstate } from '../app.state';

export const selectCounterState = (state: appstate) => state.counter;

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
