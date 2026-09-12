// === Module 4889: ? ===

// Module 4889
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import properlyBoxed from "properlyBoxed" /* 4890 */;
import _mod4892 from "module_4892" /* 4892 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4894 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4955 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4909 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4892;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;