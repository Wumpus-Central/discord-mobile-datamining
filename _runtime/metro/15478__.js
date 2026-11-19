// === Module 15478: ? ===

// Module 15478
import _mod15469 from "module_15469" /* 15469 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15479 from "module_15479" /* 15479 */;
import _mod15480 from "module_15480" /* 15480 */;


export default _mod15469 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15479("Symbol");
  let tmpResultResult = _mod15477(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15480(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15480;
  }
  return tmpResultResult;
});