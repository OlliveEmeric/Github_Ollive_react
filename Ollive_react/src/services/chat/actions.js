import * as types from "./constants";
import axios from "axios";


export function create_message() {
	return (dispatch, state) => {
		axios.get(`http://localhost:9000/api/v1/message`)
		.then((result) => {
			console.log("message -", result);

			dispatch({
				type: types.CREATE_MESSAGE,
				payload: result.data
			})
		})
	}
}

export function create_user(prenom,nom,email) {
	return (dispatch, state) => {
		axios.post('http://localhost:9000/api/v1/user',
		{ 
			prenom: prenom,
			nom: lastname, 
			email: email,
			channel: 0
		})
		.then((result) => {
			dispatch({
				type: types.CREATE_USER,
				payload: result.data
			});
		})
		.catch((e) => { console.log('create_user - ', e) })
	};
}; 

