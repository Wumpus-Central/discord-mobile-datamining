// === Module 14699: ? ===

// Module 14699
import _mod14690 from "module_14690" /* 14690 */;
import _mod14698 from "module_14698" /* 14698 */;
import _mod14700 from "module_14700" /* 14700 */;
import _mod14701 from "module_14701" /* 14701 */;


export default _mod14690 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14700("Symbol");
  let tmpResultResult = _mod14698(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14701(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14701;
  }
  return tmpResultResult;
});