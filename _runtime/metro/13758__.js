// === Module 13758: ? ===

// Module 13758
import prop from "prop" /* 13749 */;
import all from "all" /* 13757 */;
import all2 from "all" /* 13759 */;
import call from "call" /* 13760 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});