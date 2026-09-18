// === Module 14543: ? ===

// Module 14543
import _mod14534 from "module_14534" /* 14534 */;
import _mod14542 from "module_14542" /* 14542 */;
import _mod14544 from "module_14544" /* 14544 */;
import _mod14545 from "module_14545" /* 14545 */;


export default _mod14534 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14544("Symbol");
  let tmpResultResult = _mod14542(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14545(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14545;
  }
  return tmpResultResult;
});