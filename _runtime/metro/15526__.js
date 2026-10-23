// === Module 15526: ? ===

// Module 15526
import _mod15517 from "module_15517" /* 15517 */;
import _mod15525 from "module_15525" /* 15525 */;
import _mod15527 from "module_15527" /* 15527 */;
import _mod15528 from "module_15528" /* 15528 */;


export default _mod15517 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15527("Symbol");
  let tmpResultResult = _mod15525(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15528(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15528;
  }
  return tmpResultResult;
});