import axios from "axios";
import { ADD_ADMIN_REJECT, ADD_ADMIN_REQUEST, ADD_DATA, DELETE_ADMIN, FAILURE_DATA, RECEIVE_DATA, REQUEST_DATA, UPDATE_ADMIN, UPDATE_ADMIN_REJECT, UPDATE_ADMIN_REQUEST } from "../const";

export const addAdminRequest = () => ({
  type: ADD_ADMIN_REQUEST,
});

export const addData = (data) => {
  console.log('Action Payload:', data);
  return {
    type: ADD_DATA,
    payload: data,
  };
};

export const addAdminReject = (error) => ({
  type: ADD_ADMIN_REJECT,
  payload: error,
});

export const addadmin = (data) => {
  return (dispatch) => {
    dispatch(addAdminRequest());

    axios.post('http://localhost:3000/posts', data)
      .then((res) => {
        console.log('API Response (addadmin):', res.data);
        dispatch(addData(res.data));
      })
      .catch((err) => {
        console.log('API Error (addadmin):', err);
        dispatch(addAdminReject(err));
      });
  };
};
export const requestData = () => ({
  type: REQUEST_DATA,
});

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  payload: data,
});

export const failureData = (error) => ({
  type: FAILURE_DATA,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData());

    axios.get('http://localhost:3000/posts')
      .then((res) => {
        console.log('API Response (fetchData):', res.data);
        dispatch(receiveData(res.data));
      })
      .catch((err) => {
        console.log('API Error (fetchData):', err);
        dispatch(failureData(err));
      });
  };
};
export const deleteAdmin = (adminId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/posts/${adminId}`)
      .then(() => {
      
        dispatch({ type: DELETE_ADMIN, payload: adminId });
      })
      .catch((error) => {
     
        console.error('Delete Error:', error);
      });
  };
};

export const updateAdminRequest = () => ({
  type: UPDATE_ADMIN_REQUEST,
});

export const updateData = (data) => ({
  type: UPDATE_ADMIN,
  payload: data,
});


export const updateAdminReject = (error) => ({
  type: UPDATE_ADMIN_REJECT,
  payload: error,
});

export const updateAdmin = (adminId,newdata) =>{
  return(dispatch) =>{
    dispatch(updateAdminRequest());

    axios.put(`http://localhost:3000/posts/${adminId}`,newdata)
    .then((res)=>{
      console.log('updateadmin',res.data);
      dispatch(updateData(res.data));
    })
    .catch((err) => {
      console.log('API Error (updateAdmin):', err);
      dispatch(updateAdminReject(err));
    });
  }
}