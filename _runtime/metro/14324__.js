// === Module 14324: ? ===

// Module 14324
import _mod14315 from "module_14315" /* 14315 */;
import _mod14323 from "module_14323" /* 14323 */;
import _mod14325 from "module_14325" /* 14325 */;
import _mod14326 from "module_14326" /* 14326 */;


export default _mod14315 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14325("Symbol");
  let tmpResultResult = _mod14323(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14326(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14326;
  }
  return tmpResultResult;
});