//import { combineReducers } from "redux"; // this is neddet if work without configureStore
 
import uiState from "./uiState";
import uiTheme from "./uiTheme";
import userToken from "./userToken";
import jsonData from "./jsonData";
import cartList from "./cartList";

export default { 
	uiState,
	uiTheme: uiTheme,
	userToken,
	jsonData,
	cartList
 };
