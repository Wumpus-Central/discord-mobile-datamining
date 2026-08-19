// === Module 4430: getEvalledConstructor ===

// Module 4430 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 574 */;

const tmp = getEvalledConstructor("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === callback(arg0);
});