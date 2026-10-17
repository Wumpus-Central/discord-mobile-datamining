// === Module 15110: ? ===

// Module 15110
import _mod15093 from "module_15093" /* 15093 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15093(arg0, arg2);
  const tmp = new _mod15093(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};