// === Module 14899: ? ===

// Module 14899
import _mod14890 from "module_14890" /* 14890 */;
import _mod14898 from "module_14898" /* 14898 */;
import _mod14900 from "module_14900" /* 14900 */;
import _mod14901 from "module_14901" /* 14901 */;


export default _mod14890 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14900("Symbol");
  let tmpResultResult = _mod14898(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14901(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14901;
  }
  return tmpResultResult;
});