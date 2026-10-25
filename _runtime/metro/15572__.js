// === Module 15572: ? ===

// Module 15572
import _mod15563 from "module_15563" /* 15563 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15574 from "module_15574" /* 15574 */;


export default _mod15563 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15573("Symbol");
  let tmpResultResult = _mod15571(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15574(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15574;
  }
  return tmpResultResult;
});