// === Module 15513: ? ===

// Module 15513
import _mod15504 from "module_15504" /* 15504 */;
import _mod15512 from "module_15512" /* 15512 */;
import _mod15514 from "module_15514" /* 15514 */;
import _mod15515 from "module_15515" /* 15515 */;


export default _mod15504 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15514("Symbol");
  let tmpResultResult = _mod15512(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15515(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15515;
  }
  return tmpResultResult;
});