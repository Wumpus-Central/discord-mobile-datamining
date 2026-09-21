// === Module 14604: ? ===

// Module 14604
import _mod14595 from "module_14595" /* 14595 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14605 from "module_14605" /* 14605 */;
import _mod14606 from "module_14606" /* 14606 */;


export default _mod14595 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14605("Symbol");
  let tmpResultResult = _mod14603(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14606(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14606;
  }
  return tmpResultResult;
});