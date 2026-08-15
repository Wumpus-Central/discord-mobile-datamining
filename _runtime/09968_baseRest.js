// _runtime/09968_baseRest.js
import baseRest from "baseRest";
import { baseDelay } from "09969_baseDelay.js";


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));