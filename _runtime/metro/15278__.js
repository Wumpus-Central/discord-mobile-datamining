// === Module 15278: ? ===

// Module 15278
import _mod15269 from "module_15269" /* 15269 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15279 from "module_15279" /* 15279 */;
import _mod15280 from "module_15280" /* 15280 */;


export default _mod15269 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15279("Symbol");
  let tmpResultResult = _mod15277(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15280(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15280;
  }
  return tmpResultResult;
});