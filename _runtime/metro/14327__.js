// === Module 14327: ? ===

// Module 14327
import _mod14318 from "module_14318" /* 14318 */;
import _mod14326 from "module_14326" /* 14326 */;
import _mod14328 from "module_14328" /* 14328 */;
import _mod14329 from "module_14329" /* 14329 */;


export default _mod14318 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14328("Symbol");
  let tmpResultResult = _mod14326(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14329(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14329;
  }
  return tmpResultResult;
});