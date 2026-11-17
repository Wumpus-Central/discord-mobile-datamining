// === Module 16809: ? ===

// Module 16809
import _mod16800 from "module_16800" /* 16800 */;
import _mod16808 from "module_16808" /* 16808 */;
import _mod16810 from "module_16810" /* 16810 */;
import _mod16811 from "module_16811" /* 16811 */;


export default _mod16800 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16810("Symbol");
  let tmpResultResult = _mod16808(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16811(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16811;
  }
  return tmpResultResult;
});