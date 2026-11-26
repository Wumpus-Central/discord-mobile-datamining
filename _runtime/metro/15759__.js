// === Module 15759: ? ===

// Module 15759
import _mod15750 from "module_15750" /* 15750 */;
import _mod15758 from "module_15758" /* 15758 */;
import _mod15760 from "module_15760" /* 15760 */;
import _mod15761 from "module_15761" /* 15761 */;


export default _mod15750 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15760("Symbol");
  let tmpResultResult = _mod15758(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15761(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15761;
  }
  return tmpResultResult;
});