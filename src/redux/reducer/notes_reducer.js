import {
  ADD_NOTE,
  DELETE_NOTE
} from '../../constants/action_types';

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_NOTE:
      return [...state, payload.item];
    case DELETE_NOTE:
      return state.filter(({id}) => payload.id !== id);
    default:
      return state;
  }
}
