import { combineReducers } from "redux";

// reducer import
import globalInfo from "./globalInfo";
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  globalInfo: globalInfo,
});

export default reducer;
