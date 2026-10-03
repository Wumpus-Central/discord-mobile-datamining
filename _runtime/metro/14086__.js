// === Module 14086: ? ===

// Module 14086
import _mod14077 from "module_14077" /* 14077 */;
import _mod14085 from "module_14085" /* 14085 */;
import _mod14087 from "module_14087" /* 14087 */;
import _mod14088 from "module_14088" /* 14088 */;


export default _mod14077 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14087("Symbol");
  let tmpResultResult = _mod14085(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14088(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14088;
  }
  return tmpResultResult;
});