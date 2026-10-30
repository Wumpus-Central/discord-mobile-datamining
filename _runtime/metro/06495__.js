// === Module 6495: ? ===

// Module 6495
import _mod1293 from "module_1293" /* 1293 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;

const tmp = _mod1293("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});