// === Module 15608: ? ===

// Module 15608
import _mod15599 from "module_15599" /* 15599 */;
import _mod15607 from "module_15607" /* 15607 */;
import _mod15609 from "module_15609" /* 15609 */;
import _mod15610 from "module_15610" /* 15610 */;


export default _mod15599 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15609("Symbol");
  let tmpResultResult = _mod15607(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15610(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15610;
  }
  return tmpResultResult;
});