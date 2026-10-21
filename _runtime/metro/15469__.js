// === Module 15469: ? ===

// Module 15469
import _mod15460 from "module_15460" /* 15460 */;
import _mod15468 from "module_15468" /* 15468 */;
import _mod15470 from "module_15470" /* 15470 */;
import _mod15471 from "module_15471" /* 15471 */;


export default _mod15460 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15470("Symbol");
  let tmpResultResult = _mod15468(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15471(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15471;
  }
  return tmpResultResult;
});