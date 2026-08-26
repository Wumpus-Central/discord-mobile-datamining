// === Module 13866: ? ===

// Module 13866
import prop from "prop" /* 13857 */;
import all from "all" /* 13865 */;
import all2 from "all" /* 13867 */;
import call from "call" /* 13868 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});