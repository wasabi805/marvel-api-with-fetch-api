import { combineReducers } from "redux";
import navigationReducer from "./navigation-reducer";
import heroReducer from './hero-reducer'
import bodyReducer from "./body-reducer"

export default combineReducers({
  navigationReducer: navigationReducer,
  heroReducer : heroReducer,
  bodyReducer : bodyReducer,

});
