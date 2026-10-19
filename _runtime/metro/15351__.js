// === Module 15351: ? ===

// Module 15351
import _mod15342 from "module_15342" /* 15342 */;
import _mod15350 from "module_15350" /* 15350 */;
import _mod15352 from "module_15352" /* 15352 */;
import _mod15353 from "module_15353" /* 15353 */;


export default _mod15342 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15352("Symbol");
  let tmpResultResult = _mod15350(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15353(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15353;
  }
  return tmpResultResult;
});