// === Module 15913: ? ===

// Module 15913
import _mod15896 from "module_15896" /* 15896 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15896(arg0, arg2);
  const tmp = new _mod15896(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};