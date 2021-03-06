const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGE':
      console.log('email');
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGE':
      return { ...state, password: action.payload };
    case 'LOGIN_USER_PENDING':
      console.log('pending');
      return { ...state, loading: true, error: '', user: null };
    case 'LOGIN_USER_FULFILLED':
      console.log('fulfilled');
      return { ...state, loading: false, error: '', user: action.payload };
    case 'LOGIN_USER_REJECTED':
      console.log('rejected');
      return { ...state, loading: false, error: 'Unable To Login', user: null };
    default:
     return state;
  }
};
