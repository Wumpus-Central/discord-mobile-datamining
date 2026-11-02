// === Module 16155: ? ===

// Module 16155
import _mod16146 from "module_16146" /* 16146 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16156 from "module_16156" /* 16156 */;
import _mod16157 from "module_16157" /* 16157 */;


export default _mod16146 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16156("Symbol");
  let tmpResultResult = _mod16154(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16157(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16157;
  }
  return tmpResultResult;
});