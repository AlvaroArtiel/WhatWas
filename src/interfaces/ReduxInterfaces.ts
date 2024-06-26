import { Pokemon } from './Pokemon';
/* The type of the generic actions */
interface ActionFetchRequest {
    readonly type: string;
    readonly payload?: null;
}
interface ActionFetchSuccess {
    readonly type: string;
    readonly payload?: Array<Object>;
}
interface ActionFetchError {
    readonly type: string;
    readonly payload?: string;
}

// Union Action Types
export type Action = ActionFetchRequest | ActionFetchSuccess | ActionFetchError;

export interface FetchState {
    loading: boolean;
    response?: Pokemon;
    error: string;
}

export interface State {
    searcher: FetchState
  }