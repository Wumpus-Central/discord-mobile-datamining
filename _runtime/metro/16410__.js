// === Module 16410: ? ===

// Module 16410
import _mod16401 from "module_16401" /* 16401 */;
import _mod16409 from "module_16409" /* 16409 */;
import _mod16411 from "module_16411" /* 16411 */;
import _mod16412 from "module_16412" /* 16412 */;


export default _mod16401 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16411("Symbol");
  let tmpResultResult = _mod16409(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16412(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16412;
  }
  return tmpResultResult;
});