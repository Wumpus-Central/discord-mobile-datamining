// === Module 16458: ? ===

// Module 16458
import _mod16449 from "module_16449" /* 16449 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16459 from "module_16459" /* 16459 */;
import _mod16460 from "module_16460" /* 16460 */;


export default _mod16449 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16459("Symbol");
  let tmpResultResult = _mod16457(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16460(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16460;
  }
  return tmpResultResult;
});