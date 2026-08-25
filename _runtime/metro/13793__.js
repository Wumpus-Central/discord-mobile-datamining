// === Module 13793: ? ===

// Module 13793
import prop from "prop" /* 13784 */;
import all from "all" /* 13792 */;
import all2 from "all" /* 13794 */;
import call from "call" /* 13795 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});