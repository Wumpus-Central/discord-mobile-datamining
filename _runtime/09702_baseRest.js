// _runtime/09702_baseRest.js
import baseRest from "baseRest";
import { baseDelay } from "09703_baseDelay.js";


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));