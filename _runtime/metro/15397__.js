// === Module 15397: ? ===

// Module 15397
import _mod15388 from "module_15388" /* 15388 */;
import _mod15396 from "module_15396" /* 15396 */;
import _mod15398 from "module_15398" /* 15398 */;
import _mod15399 from "module_15399" /* 15399 */;


export default _mod15388 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15398("Symbol");
  let tmpResultResult = _mod15396(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15399(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15399;
  }
  return tmpResultResult;
});