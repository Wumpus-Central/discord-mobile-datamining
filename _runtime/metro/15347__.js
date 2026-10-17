// === Module 15347: ? ===

// Module 15347
import _mod15338 from "module_15338" /* 15338 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15348 from "module_15348" /* 15348 */;
import _mod15349 from "module_15349" /* 15349 */;


export default _mod15338 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15348("Symbol");
  let tmpResultResult = _mod15346(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15349(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15349;
  }
  return tmpResultResult;
});