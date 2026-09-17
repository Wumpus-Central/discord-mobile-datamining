// _runtime/metro/04928__.js
import _mod1281 from "01281__.js";
import callBoundIntrinsic from "../01315_callBoundIntrinsic.js";

const tmp = _mod1281("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = callBoundIntrinsic("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray ||
  function IsArray(arg0) {
    return "[object Array]" === closure_0(arg0);
  };
