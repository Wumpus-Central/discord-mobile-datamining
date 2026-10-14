// === Module 14937: ? ===

// Module 14937
import _mod14928 from "module_14928" /* 14928 */;
import _mod14936 from "module_14936" /* 14936 */;
import _mod14938 from "module_14938" /* 14938 */;
import _mod14939 from "module_14939" /* 14939 */;


export default _mod14928 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14938("Symbol");
  let tmpResultResult = _mod14936(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14939(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14939;
  }
  return tmpResultResult;
});