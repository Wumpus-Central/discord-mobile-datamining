// === Module 16413: ? ===

// Module 16413
import _mod16404 from "module_16404" /* 16404 */;
import _mod16412 from "module_16412" /* 16412 */;
import _mod16414 from "module_16414" /* 16414 */;
import _mod16415 from "module_16415" /* 16415 */;


export default _mod16404 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16414("Symbol");
  let tmpResultResult = _mod16412(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16415(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16415;
  }
  return tmpResultResult;
});