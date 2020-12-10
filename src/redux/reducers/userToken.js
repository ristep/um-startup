import produce from "immer";
import {
	FETCH_TOKEN_REQUEST,
	FETCH_TOKEN_SUCCESS,
	FETCH_TOKEN_ERROR,
	CLEAR_TOKEN
} from 'redux/actionTypes';

export const initialState = () => {
	return {
		isFetching: false,
		isValid: false,
		hasError: true,
		isLoggedIn: false,
		tokenData: {
			"timeStamp": undefined,
			"OK": false,
			"error": false,
			"count": 0,
			"message": "",
			"data": {
				"id": undefined,
				"name": "",
				"email": "",
				"first_name": "",
				"second_name": "",
				"role": "guest",
				"jti": "",
				"auToken": undefined
			}
		}
	}
};

const userToken = (state = initialState(), action) =>
	produce(state, draft => { 
		// console.log(action);
		switch (action.type) {
			case CLEAR_TOKEN: {
				return initialState();
			}	
			case FETCH_TOKEN_REQUEST: {
				draft.isFetching = true;
				draft.isValid = false;
				draft.hasError = true;
				//console.log(action.type);
				break;
			}
			case FETCH_TOKEN_SUCCESS: {
				draft.isFetching = false;
				draft.isValid = true;
				draft.hasError = false;
				draft.tokenData = action.payload;
				draft.isLoggedIn = action.payload.name!=='anonymous';  
				break;
			}
			case FETCH_TOKEN_ERROR: {
				draft = initialState();
				draft.hasError = true;
				break;
			}
			default:
				return state;
		}
	});

export default userToken;