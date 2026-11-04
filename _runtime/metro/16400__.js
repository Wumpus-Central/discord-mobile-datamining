// === Module 16400: ? ===

// Module 16400
import _mod16391 from "module_16391" /* 16391 */;
import _mod16399 from "module_16399" /* 16399 */;
import _mod16401 from "module_16401" /* 16401 */;
import _mod16402 from "module_16402" /* 16402 */;


export default _mod16391 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16401("Symbol");
  let tmpResultResult = _mod16399(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16402(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16402;
  }
  return tmpResultResult;
});