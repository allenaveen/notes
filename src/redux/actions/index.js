import * as types from '../../constants/action_types';

export const addItem = (item) => ({
	type: types.ADD_NOTE,
	payload: {item}
});
export const deleteItem = (id) => ({
	type: types.DELETE_NOTE,
	payload: {id}
});
