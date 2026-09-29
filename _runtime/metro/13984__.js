// === Module 13984: ? ===

// Module 13984
import _mod13975 from "module_13975" /* 13975 */;
import _mod13983 from "module_13983" /* 13983 */;
import _mod13985 from "module_13985" /* 13985 */;
import _mod13986 from "module_13986" /* 13986 */;


export default _mod13975 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod13985("Symbol");
  let tmpResultResult = _mod13983(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod13986(tmp3.prototype, Object(arg0));
    const tmpResult = _mod13986;
  }
  return tmpResultResult;
});