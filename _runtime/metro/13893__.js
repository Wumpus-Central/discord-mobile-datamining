// === Module 13893: ? ===

// Module 13893
import prop from "prop" /* 13884 */;
import all from "all" /* 13892 */;
import all2 from "all" /* 13894 */;
import call from "call" /* 13895 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});