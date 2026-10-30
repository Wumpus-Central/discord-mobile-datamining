// === Module 16110: ? ===

// Module 16110
import _mod16101 from "module_16101" /* 16101 */;
import _mod16109 from "module_16109" /* 16109 */;
import _mod16111 from "module_16111" /* 16111 */;
import _mod16112 from "module_16112" /* 16112 */;


export default _mod16101 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16111("Symbol");
  let tmpResultResult = _mod16109(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16112(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16112;
  }
  return tmpResultResult;
});