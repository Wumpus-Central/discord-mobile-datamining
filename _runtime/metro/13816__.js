// === Module 13816: ? ===

// Module 13816
import _mod13807 from "module_13807" /* 13807 */;
import _mod13815 from "module_13815" /* 13815 */;
import _mod13817 from "module_13817" /* 13817 */;
import _mod13818 from "module_13818" /* 13818 */;


export default _mod13807 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod13817("Symbol");
  let tmpResultResult = _mod13815(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod13818(tmp3.prototype, Object(arg0));
    const tmpResult = _mod13818;
  }
  return tmpResultResult;
});