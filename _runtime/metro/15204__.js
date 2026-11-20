// === Module 15204: ? ===

// Module 15204
import _mod15187 from "module_15187" /* 15187 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15187(arg0, arg2);
  const tmp = new _mod15187(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};