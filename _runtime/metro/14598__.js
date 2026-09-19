// === Module 14598: ? ===

// Module 14598
import _mod14589 from "module_14589" /* 14589 */;
import _mod14597 from "module_14597" /* 14597 */;
import _mod14599 from "module_14599" /* 14599 */;
import _mod14600 from "module_14600" /* 14600 */;


export default _mod14589 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14599("Symbol");
  let tmpResultResult = _mod14597(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14600(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14600;
  }
  return tmpResultResult;
});