// _runtime/10601_baseRest.js
import baseRest from "08587_baseRest.js";
import baseDelay from "10602_baseDelay.js";


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));