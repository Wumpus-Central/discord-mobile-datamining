// === Module 14377: ? ===

// Module 14377
import _mod14368 from "module_14368" /* 14368 */;
import _mod14376 from "module_14376" /* 14376 */;
import _mod14378 from "module_14378" /* 14378 */;
import _mod14379 from "module_14379" /* 14379 */;


export default _mod14368 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14378("Symbol");
  let tmpResultResult = _mod14376(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14379(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14379;
  }
  return tmpResultResult;
});