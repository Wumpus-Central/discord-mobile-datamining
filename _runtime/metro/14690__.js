// === Module 14690: ? ===

// Module 14690
import _mod14681 from "module_14681" /* 14681 */;
import _mod14689 from "module_14689" /* 14689 */;
import _mod14691 from "module_14691" /* 14691 */;
import _mod14692 from "module_14692" /* 14692 */;


export default _mod14681 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14691("Symbol");
  let tmpResultResult = _mod14689(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14692(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14692;
  }
  return tmpResultResult;
});