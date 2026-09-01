// === Module 13979: ? ===

// Module 13979
import prop from "prop" /* 13970 */;
import all from "all" /* 13978 */;
import all2 from "all" /* 13980 */;
import call from "call" /* 13981 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});