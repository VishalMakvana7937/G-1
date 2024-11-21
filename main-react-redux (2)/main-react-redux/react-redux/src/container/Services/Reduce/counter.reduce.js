const initialState = {
    count: 0,
    isEdit: true
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                isEdit: state.isEdit
            };

        case "DECREMENT":
            return {
                count: Math.max(0, state.count - 1),
                isEdit: state.isEdit
            };

        default:
            return state;
    }
};
