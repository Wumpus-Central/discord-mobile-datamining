// === Module 15834: ? ===

// Module 15834
import _mod15825 from "module_15825" /* 15825 */;
import _mod15833 from "module_15833" /* 15833 */;
import _mod15835 from "module_15835" /* 15835 */;
import _mod15836 from "module_15836" /* 15836 */;


export default _mod15825 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15835("Symbol");
  let tmpResultResult = _mod15833(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15836(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15836;
  }
  return tmpResultResult;
});