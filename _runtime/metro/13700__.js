// === Module 13700: ? ===

// Module 13700
import prop from "prop" /* 13691 */;
import all from "all" /* 13699 */;
import all2 from "all" /* 13701 */;
import call from "call" /* 13702 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});