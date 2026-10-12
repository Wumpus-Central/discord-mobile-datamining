// === Module 14578: ? ===

// Module 14578
import _mod14569 from "module_14569" /* 14569 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14579 from "module_14579" /* 14579 */;
import _mod14580 from "module_14580" /* 14580 */;


export default _mod14569 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14579("Symbol");
  let tmpResultResult = _mod14577(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14580(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14580;
  }
  return tmpResultResult;
});