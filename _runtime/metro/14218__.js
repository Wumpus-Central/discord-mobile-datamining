// === Module 14218: ? ===

// Module 14218
import prop from "prop" /* 14209 */;
import all from "all" /* 14217 */;
import all2 from "all" /* 14219 */;
import call from "call" /* 14220 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});