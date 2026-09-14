// === Module 14413: ? ===

// Module 14413
import _mod14404 from "module_14404" /* 14404 */;
import _mod14412 from "module_14412" /* 14412 */;
import _mod14414 from "module_14414" /* 14414 */;
import _mod14415 from "module_14415" /* 14415 */;


export default _mod14404 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14414("Symbol");
  let tmpResultResult = _mod14412(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14415(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14415;
  }
  return tmpResultResult;
});