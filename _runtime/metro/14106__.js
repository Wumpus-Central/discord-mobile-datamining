// === Module 14106: ? ===

// Module 14106
import _mod14097 from "module_14097" /* 14097 */;
import _mod14105 from "module_14105" /* 14105 */;
import _mod14107 from "module_14107" /* 14107 */;
import _mod14108 from "module_14108" /* 14108 */;


export default _mod14097 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14107("Symbol");
  let tmpResultResult = _mod14105(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14108(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14108;
  }
  return tmpResultResult;
});