import { DELETESTU, SINGLESTU, STUDENT, UPDATEDATA } from "../const";

const data = JSON.parse(localStorage.getItem('students')) || [];

const initialState = {
    students: data,
    student: null
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case STUDENT:
            const updated = [...state.students, action.payload];
            localStorage.setItem("students", JSON.stringify(updated));
            return { ...state, students: updated };

        case SINGLESTU:
            const single = state.students.find(data => data.id === action.payload);
            return { ...state, student: single };

        case DELETESTU:
            const remaining = state.students.filter(data => data.id !== action.payload);
            localStorage.setItem("students", JSON.stringify(remaining));
            return { ...state, students: remaining };

        case UPDATEDATA:
            const newedata = state.students.map((data)=>{
                if(data.id == action.payload.id){
                    return data = action.payload;
                }else{
                    return data;
                }
            })
            localStorage.setItem("students", JSON.stringify(newedata));
            return{
                ...state,
                students : newedata
            }
        default:
            return state;
    }
};

export default studentReducer;
