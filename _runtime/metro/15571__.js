// === Module 15571: ? ===

// Module 15571
import _mod15562 from "module_15562" /* 15562 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15573 from "module_15573" /* 15573 */;


export default _mod15562 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15572("Symbol");
  let tmpResultResult = _mod15570(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15573(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15573;
  }
  return tmpResultResult;
});