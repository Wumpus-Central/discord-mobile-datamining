// === Module 13815: ? ===

// Module 13815
import _mod13806 from "module_13806" /* 13806 */;
import _mod13814 from "module_13814" /* 13814 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13817 from "module_13817" /* 13817 */;


export default _mod13806 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod13816("Symbol");
  let tmpResultResult = _mod13814(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod13817(tmp3.prototype, Object(arg0));
    const tmpResult = _mod13817;
  }
  return tmpResultResult;
});