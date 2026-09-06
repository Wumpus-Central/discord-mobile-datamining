// _runtime/04848_getEvalledConstructor.js
import getEvalledConstructor from "01282_getEvalledConstructor.js";
import callBoundIntrinsic from "01316_callBoundIntrinsic.js";

const tmp = getEvalledConstructor("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray ||
  function IsArray(arg0) {
    return "[object Array]" === callback(arg0);
  };
