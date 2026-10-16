// _runtime/metro/05909__.js
import _mod1307 from "01307__.js";
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";

const tmp = _mod1307("%Array%");
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
