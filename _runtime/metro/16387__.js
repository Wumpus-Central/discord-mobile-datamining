// === Module 16387: ? ===

// Module 16387
import _mod16378 from "module_16378" /* 16378 */;
import _mod16386 from "module_16386" /* 16386 */;
import _mod16388 from "module_16388" /* 16388 */;
import _mod16389 from "module_16389" /* 16389 */;


export default _mod16378 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16388("Symbol");
  let tmpResultResult = _mod16386(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16389(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16389;
  }
  return tmpResultResult;
});