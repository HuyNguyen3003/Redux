import {
    FETCH_USER_SUCCESS, FETCH_USER_ERROR
    , DELETE_USER_ERROR, DELETE_USER_SUCCESS,
    CREATE_USER_SUCCESS, CREATE_USER_ERROR
} from '../actions/types';


const INITIAL_STATE = {

    listUser: []
};

const reducer = (state = INITIAL_STATE, action) => {



    switch (action.type) {

        case FETCH_USER_SUCCESS:

            return {

                ...state, listUser: action.data


            };

        case FETCH_USER_ERROR:

            return {
                ...state

            };
        case DELETE_USER_SUCCESS:

            return {

                ...state


            };

        case DELETE_USER_ERROR:

            return {
                ...state,

            };
        case CREATE_USER_SUCCESS:

            return {

                ...state


            };

        case CREATE_USER_ERROR:

            return {
                ...state

            };

        default: return state;

    }

};

export default reducer;