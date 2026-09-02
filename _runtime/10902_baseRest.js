// _runtime/10902_baseRest.js
import baseRest from "08671_baseRest.js";
import baseDelay from "10903_baseDelay.js";

export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));
