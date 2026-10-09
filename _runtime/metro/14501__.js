// === Module 14501: ? ===

// Module 14501
import _mod14492 from "module_14492" /* 14492 */;
import _mod14500 from "module_14500" /* 14500 */;
import _mod14502 from "module_14502" /* 14502 */;
import _mod14503 from "module_14503" /* 14503 */;


export default _mod14492 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14502("Symbol");
  let tmpResultResult = _mod14500(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14503(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14503;
  }
  return tmpResultResult;
});