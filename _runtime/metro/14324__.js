// === Module 14324: ? ===

// Module 14324
import prop from "prop" /* 14315 */;
import all from "all" /* 14323 */;
import all2 from "all" /* 14325 */;
import call from "call" /* 14326 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});