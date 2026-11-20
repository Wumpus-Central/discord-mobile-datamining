// === Module 15442: ? ===

// Module 15442
import _mod15433 from "module_15433" /* 15433 */;
import _mod15441 from "module_15441" /* 15441 */;
import _mod15443 from "module_15443" /* 15443 */;
import _mod15444 from "module_15444" /* 15444 */;


export default _mod15433 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15443("Symbol");
  let tmpResultResult = _mod15441(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15444(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15444;
  }
  return tmpResultResult;
});