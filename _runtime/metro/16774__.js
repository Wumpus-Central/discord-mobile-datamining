// === Module 16774: ? ===

// Module 16774
import _mod16765 from "module_16765" /* 16765 */;
import _mod16773 from "module_16773" /* 16773 */;
import _mod16775 from "module_16775" /* 16775 */;
import _mod16776 from "module_16776" /* 16776 */;


export default _mod16765 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16775("Symbol");
  let tmpResultResult = _mod16773(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod16776(tmp3.prototype, Object(arg0));
    const tmpResult = _mod16776;
  }
  return tmpResultResult;
});