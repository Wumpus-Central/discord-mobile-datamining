// === Module 16070: ? ===

// Module 16070
import _mod16061 from "module_16061" /* 16061 */;
import _mod16069 from "module_16069" /* 16069 */;
import _mod16071 from "module_16071" /* 16071 */;
import _mod16072 from "module_16072" /* 16072 */;


export default _mod16061 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16071("Symbol");
  let tmpResultResult = _mod16069(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16072(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16072;
  }
  return tmpResultResult;
});