// === Module 16656: ? ===

// Module 16656
import _mod16647 from "module_16647" /* 16647 */;
import _mod16655 from "module_16655" /* 16655 */;
import _mod16657 from "module_16657" /* 16657 */;
import _mod16658 from "module_16658" /* 16658 */;


export default _mod16647 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16657("Symbol");
  let tmpResultResult = _mod16655(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16658(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16658;
  }
  return tmpResultResult;
});