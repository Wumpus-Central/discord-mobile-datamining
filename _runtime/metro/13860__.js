// === Module 13860: ? ===

// Module 13860
import _mod13851 from "module_13851" /* 13851 */;
import _mod13859 from "module_13859" /* 13859 */;
import _mod13861 from "module_13861" /* 13861 */;
import _mod13862 from "module_13862" /* 13862 */;


export default _mod13851 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod13861("Symbol");
  let tmpResultResult = _mod13859(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod13862(tmp3.prototype, Object(arg0));
    const tmpResult = _mod13862;
  }
  return tmpResultResult;
});