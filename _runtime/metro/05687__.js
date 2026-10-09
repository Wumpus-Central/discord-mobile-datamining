// === Module 5687: ? ===

// Module 5687
import _mod1305 from "module_1305" /* 1305 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;

const tmp = _mod1305("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});