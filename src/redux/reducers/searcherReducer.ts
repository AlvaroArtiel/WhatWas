import { Action, FetchState } from '../../interfaces/ReduxInterfaces';
import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_ERROR } from '../actions/SearcherAction';

const initialState: FetchState = {
    loading: false,
    response: undefined,
    error: ''
}

const searcher = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_API_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_API_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload,
                error: ''
            }
        case FETCH_API_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default searcher;