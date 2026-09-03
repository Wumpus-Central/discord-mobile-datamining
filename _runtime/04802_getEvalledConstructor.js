// _runtime/04802_getEvalledConstructor.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import callBoundIntrinsic from "00571_callBoundIntrinsic.js";

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
