// === Module 14440: ? ===

// Module 14440
import _mod14431 from "module_14431" /* 14431 */;
import _mod14439 from "module_14439" /* 14439 */;
import _mod14441 from "module_14441" /* 14441 */;
import _mod14442 from "module_14442" /* 14442 */;


export default _mod14431 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14441("Symbol");
  let tmpResultResult = _mod14439(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14442(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14442;
  }
  return tmpResultResult;
});