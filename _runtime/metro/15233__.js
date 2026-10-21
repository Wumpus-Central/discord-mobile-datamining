// === Module 15233: ? ===

// Module 15233
import _mod15216 from "module_15216" /* 15216 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15216(arg0, arg2);
  const tmp = new _mod15216(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};