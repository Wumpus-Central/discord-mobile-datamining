// === Module 16298: ? ===

// Module 16298
import _mod16289 from "module_16289" /* 16289 */;
import _mod16297 from "module_16297" /* 16297 */;
import _mod16299 from "module_16299" /* 16299 */;
import _mod16300 from "module_16300" /* 16300 */;


export default _mod16289 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16299("Symbol");
  let tmpResultResult = _mod16297(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16300(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16300;
  }
  return tmpResultResult;
});