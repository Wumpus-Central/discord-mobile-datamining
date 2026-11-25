// === Module 15708: ? ===

// Module 15708
import _mod15699 from "module_15699" /* 15699 */;
import _mod15707 from "module_15707" /* 15707 */;
import _mod15709 from "module_15709" /* 15709 */;
import _mod15710 from "module_15710" /* 15710 */;


export default _mod15699 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15709("Symbol");
  let tmpResultResult = _mod15707(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod15710(tmp3.prototype, Object(arg0));
    const tmpResult = _mod15710;
  }
  return tmpResultResult;
});