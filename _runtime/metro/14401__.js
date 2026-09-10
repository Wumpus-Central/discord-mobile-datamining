// === Module 14401: ? ===

// Module 14401
import _mod14392 from "module_14392" /* 14392 */;
import _mod14400 from "module_14400" /* 14400 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14403 from "module_14403" /* 14403 */;


export default _mod14392 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14402("Symbol");
  let tmpResultResult = _mod14400(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14403(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14403;
  }
  return tmpResultResult;
});