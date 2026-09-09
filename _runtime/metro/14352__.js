// === Module 14352: ? ===

// Module 14352
import _mod14343 from "module_14343" /* 14343 */;
import _mod14351 from "module_14351" /* 14351 */;
import _mod14353 from "module_14353" /* 14353 */;
import _mod14354 from "module_14354" /* 14354 */;


export default _mod14343 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14353("Symbol");
  let tmpResultResult = _mod14351(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14354(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14354;
  }
  return tmpResultResult;
});