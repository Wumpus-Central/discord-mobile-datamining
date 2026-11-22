// === Module 15563: ? ===

// Module 15563
import _mod15554 from "module_15554" /* 15554 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15565 from "module_15565" /* 15565 */;


export default _mod15554 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15564("Symbol");
  let tmpResultResult = _mod15562(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15565(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15565;
  }
  return tmpResultResult;
});