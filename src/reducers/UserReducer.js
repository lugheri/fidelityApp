import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
  token: '',
  user: {},
 
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case 'setToken':
      AsyncStorage.setItem('token', action.payload.token)
      return { ...state, token:action.payload.token};
    break;
    case 'setUser':
      return { ... state, user: action.payload.user};
    break;
  }
  return state;
}