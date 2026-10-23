// === Module 15547: ? ===

// Module 15547
import _mod15538 from "module_15538" /* 15538 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15548 from "module_15548" /* 15548 */;
import _mod15549 from "module_15549" /* 15549 */;


export default _mod15538 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15548("Symbol");
  let tmpResultResult = _mod15546(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15549(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15549;
  }
  return tmpResultResult;
});