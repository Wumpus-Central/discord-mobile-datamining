// _runtime/metro/06495__.js
import _mod1293 from "01293__.js";
import callBoundIntrinsic from "../01327_callBoundIntrinsic.js";

const tmp = _mod1293("%Array%");
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
