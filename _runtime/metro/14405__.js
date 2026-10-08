// === Module 14405: ? ===

// Module 14405
import _mod14396 from "module_14396" /* 14396 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14406 from "module_14406" /* 14406 */;
import _mod14407 from "module_14407" /* 14407 */;


export default _mod14396 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14406("Symbol");
  let tmpResultResult = _mod14404(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14407(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14407;
  }
  return tmpResultResult;
});