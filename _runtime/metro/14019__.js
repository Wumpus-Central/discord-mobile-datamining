// === Module 14019: ? ===

// Module 14019
import _mod14010 from "module_14010" /* 14010 */;
import _mod14018 from "module_14018" /* 14018 */;
import _mod14020 from "module_14020" /* 14020 */;
import _mod14021 from "module_14021" /* 14021 */;


export default _mod14010 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14020("Symbol");
  let tmpResultResult = _mod14018(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14021(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14021;
  }
  return tmpResultResult;
});