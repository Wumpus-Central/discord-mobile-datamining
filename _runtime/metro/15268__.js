// === Module 15268: ? ===

// Module 15268
import _mod15259 from "module_15259" /* 15259 */;
import _mod15267 from "module_15267" /* 15267 */;
import _mod15269 from "module_15269" /* 15269 */;
import _mod15270 from "module_15270" /* 15270 */;


export default _mod15259 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15269("Symbol");
  let tmpResultResult = _mod15267(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15270(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15270;
  }
  return tmpResultResult;
});