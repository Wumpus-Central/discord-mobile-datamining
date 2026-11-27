// === Module 15766: ? ===

// Module 15766
import _mod15757 from "module_15757" /* 15757 */;
import _mod15765 from "module_15765" /* 15765 */;
import _mod15767 from "module_15767" /* 15767 */;
import _mod15768 from "module_15768" /* 15768 */;


export default _mod15757 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15767("Symbol");
  let tmpResultResult = _mod15765(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15768(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15768;
  }
  return tmpResultResult;
});