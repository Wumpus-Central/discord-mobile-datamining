// === Module 4924: ? ===

// Module 4924
import _mod1280 from "module_1280" /* 1280 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1314 */;

const tmp = _mod1280("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});