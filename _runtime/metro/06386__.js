// === Module 6386: ? ===

// Module 6386
import _mod1307 from "module_1307" /* 1307 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;

const tmp = _mod1307("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});