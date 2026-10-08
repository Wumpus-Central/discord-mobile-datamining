// === Module 5686: ? ===

// Module 5686
import _mod1304 from "module_1304" /* 1304 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;

const tmp = _mod1304("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === closure_0(arg0);
});