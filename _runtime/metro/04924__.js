// _runtime/metro/04924__.js
import _mod1280 from "01280__.js";
import callBoundIntrinsic from "../01314_callBoundIntrinsic.js";

const tmp = _mod1280("%Array%");
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
