// === Module 14088: ? ===

// Module 14088
import _mod14079 from "module_14079" /* 14079 */;
import _mod14087 from "module_14087" /* 14087 */;
import _mod14089 from "module_14089" /* 14089 */;
import _mod14090 from "module_14090" /* 14090 */;


export default _mod14079 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14089("Symbol");
  let tmpResultResult = _mod14087(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14090(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14090;
  }
  return tmpResultResult;
});