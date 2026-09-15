// === Module 4927: ? ===

// Module 4927
import _mod1281 from "module_1281" /* 1281 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;

const tmp = _mod1281("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});