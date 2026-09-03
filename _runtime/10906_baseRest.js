// _runtime/10906_baseRest.js
import baseRest from "08675_baseRest.js";
import baseDelay from "10907_baseDelay.js";

export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));
