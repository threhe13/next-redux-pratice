export const initialState = {
  success: false,
  isLoading: false,
  error: false,
};

export const SUCCESS = 'SUCCESS';
export const ISLOADING = 'ISLOADING';
export const ERROR = 'ERROR';

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISLOADING:
      return {
        success: false,
        isLoading: true,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
