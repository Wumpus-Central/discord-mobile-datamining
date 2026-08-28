// === Module 13912: ? ===

// Module 13912
import prop from "prop" /* 13903 */;
import all from "all" /* 13911 */;
import all2 from "all" /* 13913 */;
import call from "call" /* 13914 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});