// === Module 15565: ? ===

// Module 15565
import _mod15556 from "module_15556" /* 15556 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15567 from "module_15567" /* 15567 */;


export default _mod15556 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15566("Symbol");
  let tmpResultResult = _mod15564(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15567(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15567;
  }
  return tmpResultResult;
});