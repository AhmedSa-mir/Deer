import * as ACTION_TYPES from '../actions/types';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

const initialState = {
  notes: [],
};

const NoteReducer = handleActions(
  {
    [ ACTION_TYPES.ADD_NOTE ]: (state = initialState, action) =>
    {
      console.log('reached reducer');
      return Object.assign({}, state, {
        notes: [...state.notes, action.payload],
      });
    },

    [ ACTION_TYPES.FETCH_ALL_NOTES ]: (state = initialState, action) =>
      Object.assign({}, state, {
        notes: [...action.payload],
      }),
  },
  initialState
);

export default NoteReducer;

// Selector Input
const getFormState = state => state.form;

// Selectors
export const getNotes = createSelector(
  getFormState,
  formState => formState.notes
);
