// === Module 16651: ? ===

// Module 16651
import _mod16642 from "module_16642" /* 16642 */;
import _mod16650 from "module_16650" /* 16650 */;
import _mod16652 from "module_16652" /* 16652 */;
import _mod16653 from "module_16653" /* 16653 */;


export default _mod16642 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16652("Symbol");
  let tmpResultResult = _mod16650(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16653(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16653;
  }
  return tmpResultResult;
});