// === Module 16495: ? ===

// Module 16495
import _mod16486 from "module_16486" /* 16486 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16497 from "module_16497" /* 16497 */;


export default _mod16486 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16496("Symbol");
  let tmpResultResult = _mod16494(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16497(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16497;
  }
  return tmpResultResult;
});