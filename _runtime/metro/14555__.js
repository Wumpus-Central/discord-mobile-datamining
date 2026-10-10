// === Module 14555: ? ===

// Module 14555
import _mod14546 from "module_14546" /* 14546 */;
import _mod14554 from "module_14554" /* 14554 */;
import _mod14556 from "module_14556" /* 14556 */;
import _mod14557 from "module_14557" /* 14557 */;


export default _mod14546 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14556("Symbol");
  let tmpResultResult = _mod14554(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14557(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14557;
  }
  return tmpResultResult;
});