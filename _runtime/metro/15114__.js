// === Module 15114: ? ===

// Module 15114
import _mod15097 from "module_15097" /* 15097 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15097(arg0, arg2);
  const tmp = new _mod15097(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};