// === Module 15492: ? ===

// Module 15492
import _mod15483 from "module_15483" /* 15483 */;
import _mod15491 from "module_15491" /* 15491 */;
import _mod15493 from "module_15493" /* 15493 */;
import _mod15494 from "module_15494" /* 15494 */;


export default _mod15483 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15493("Symbol");
  let tmpResultResult = _mod15491(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15494(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15494;
  }
  return tmpResultResult;
});