// === Module 14202: ? ===

// Module 14202
import prop from "prop" /* 14193 */;
import all from "all" /* 14201 */;
import all2 from "all" /* 14203 */;
import call from "call" /* 14204 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});