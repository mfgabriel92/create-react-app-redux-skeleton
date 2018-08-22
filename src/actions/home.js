import { RSAA } from "redux-api-middleware";

export const HOME = "auth:home";
export const HOME_SUCCESS = "auth:home_success";
export const HOME_FAILURE = "auth:home_failure";

export function home(data) {
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_API_HOST}/posts`,
      method: "GET",
      types: [HOME, HOME_SUCCESS, HOME_FAILURE]
    }
  }
}

const ACTION_HANDLERS = {
  [HOME]: state => ({
    ...state,
    getting: true,
    getSuccess: false
  }),
  [HOME_SUCCESS]: (state, action) => ({
    ...state,
    getting: false,
    getSuccess: true,
    data: action.payload
  }),
  [HOME_FAILURE]: state => ({
    ...state,
    getting: false,
    getSuccess: false
  })
};

const initialState = {
    getting: false,
    getSuccess: false,
    data: null
};

export default function auth(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}