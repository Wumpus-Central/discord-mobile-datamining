// _runtime/metro/05686__.js
import _mod1304 from "01304__.js";
import callBoundIntrinsic from "../01338_callBoundIntrinsic.js";

const tmp = _mod1304("%Array%");
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
