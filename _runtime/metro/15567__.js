// === Module 15567: ? ===

// Module 15567
import _mod15558 from "module_15558" /* 15558 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15568 from "module_15568" /* 15568 */;
import _mod15569 from "module_15569" /* 15569 */;


export default _mod15558 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15568("Symbol");
  let tmpResultResult = _mod15566(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15569(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15569;
  }
  return tmpResultResult;
});