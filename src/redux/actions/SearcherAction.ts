import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk'
import { Action } from '../../interfaces/ReduxInterfaces';

export const FETCH_API_REQUEST : string = 'FETCH_API_REQUEST';
export const FETCH_API_SUCCESS : string = 'FETCH_API_SUCCESS';
export const FETCH_API_ERROR : string = 'FETCH_API_ERROR';

// Action Definition
export const fetchRequest = (): Action => {
    return {
        type: FETCH_API_REQUEST
    }
}

export const fetchSuccess = (query: string): Action => {
    return {
        type: FETCH_API_SUCCESS,
        payload: query
    }
} 

export const fetchError = (error: string): Action => {
    return {
        type: FETCH_API_ERROR,
        payload: error
    }
}

export const fetchAPI = (value: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(fetchRequest());
        let jsonData: string;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
            if(response.ok){
                jsonData = await response.json();
                /* If response is OK, then we store the JSON data*/
                dispatch(fetchSuccess(jsonData));
            }
            else {
                throw new Error(await response.text())
            }
        }
        catch(e: any) {
            /* If response is KO, then we store the error from the API*/
            dispatch(fetchError(e.message));
        }

    }
}
