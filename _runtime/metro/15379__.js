// === Module 15379: ? ===

// Module 15379
import _mod15370 from "module_15370" /* 15370 */;
import _mod15378 from "module_15378" /* 15378 */;
import _mod15380 from "module_15380" /* 15380 */;
import _mod15381 from "module_15381" /* 15381 */;


export default _mod15370 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15380("Symbol");
  let tmpResultResult = _mod15378(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15381(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15381;
  }
  return tmpResultResult;
});