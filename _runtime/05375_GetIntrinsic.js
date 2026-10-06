// _runtime/05375_GetIntrinsic.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";

const tmp = GetIntrinsic("%Array%");
let closure_0 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");
const tmp3 =
  tmp.isArray ||
  function IsArray(arg0) {
    return "[object Array]" === closure_0(arg0);
  };
const tmp2 = !tmp.isArray && callBoundIntrinsic("Object.prototype.toString");

export default tmp3;
