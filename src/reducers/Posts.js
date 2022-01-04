/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (Posts = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...Posts, action.payload];
		case UPDATE:
			return Posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case DELETE:
			return Posts.filter((post) => post._id !== action.payload);
		default:
			return Posts;
	}
};
