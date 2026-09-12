// === Module 14412: ? ===

// Module 14412
import _mod14403 from "module_14403" /* 14403 */;
import _mod14411 from "module_14411" /* 14411 */;
import _mod14413 from "module_14413" /* 14413 */;
import _mod14414 from "module_14414" /* 14414 */;


export default _mod14403 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14413("Symbol");
  let tmpResultResult = _mod14411(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14414(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14414;
  }
  return tmpResultResult;
});