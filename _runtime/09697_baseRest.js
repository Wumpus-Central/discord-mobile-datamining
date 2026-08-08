// _runtime/09697_baseRest.js
import baseRest from "baseRest";
import { baseDelay } from "09698_baseDelay.js";


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));