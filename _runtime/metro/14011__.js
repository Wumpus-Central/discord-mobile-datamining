// === Module 14011: ? ===

// Module 14011
import _mod14002 from "module_14002" /* 14002 */;
import _mod14010 from "module_14010" /* 14010 */;
import _mod14012 from "module_14012" /* 14012 */;
import _mod14013 from "module_14013" /* 14013 */;


export default _mod14002 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14012("Symbol");
  let tmpResultResult = _mod14010(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14013(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14013;
  }
  return tmpResultResult;
});