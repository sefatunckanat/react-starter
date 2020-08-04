const Reducer = (state, action) => {
	switch (action.type) {
		case "SET_NOTE":
			return {
				...state,
				note: action.payload,
			};

		default:
			return state;
	}
};

export default Reducer;
