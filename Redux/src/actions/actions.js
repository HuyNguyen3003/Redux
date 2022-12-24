import {
    INCREMENT, DECREMENT, DELETE_USER_SUCCESS
    , FETCH_USER_SUCCESS, FETCH_USER_ERROR,
    DELETE_USER_ERROR, CREATE_USER_SUCCESS,
    CREATE_USER_ERROR

} from './types';
import axios from "axios";



export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: { like: 'buy milk', name: 'huy' }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};

export const fetAlluser = () => {

    return async (dispatch, getState) => {
        try {
            let res = await axios.get("http://localhost:8080/users/all")
            let data = res && res.data ? res.data : []
            dispatch(fetAlluserSuccess(data))


        } catch (e) {
            dispatch(fetAlluserError())
            console(e)
        }
    }
}



export const fetAlluserSuccess = (data) => {

    return {
        type: FETCH_USER_SUCCESS,
        data: data
    }
}
export const fetAlluserError = () => {

    return {
        type: FETCH_USER_ERROR,
        data: []
    }
}

export const Deleteuser = (id) => {

    return async (dispatch, getState) => {
        try {
            await axios.post(`http://localhost:8080/users/delete/${id}`)
            dispatch(deleteuserSuccess())


        } catch (e) {
            dispatch(deleteuserError())
            console(e)
        }
    }
}



export const deleteuserSuccess = (data) => {

    return {
        type: DELETE_USER_SUCCESS,
    }
}
export const deleteuserError = () => {

    return {
        type: DELETE_USER_ERROR,
    }
}


export const Createuser = (email, password, username) => {

    return async (dispatch, getState) => {
        try {

            await axios.post(`http://localhost:8080/users/create`, { email, password, username })

            dispatch(CreateuserSuccess())
            await dispatch(fetAlluser())


        } catch (e) {
            dispatch(deleteuserError())
            console(e)
        }
    }
}



export const CreateuserSuccess = () => {

    return {
        type: CREATE_USER_SUCCESS,

    }
}
export const CreateuserError = () => {

    return {
        type: CREATE_USER_ERROR,
    }
}