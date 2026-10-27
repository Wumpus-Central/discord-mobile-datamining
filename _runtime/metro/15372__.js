// === Module 15372: ? ===

// Module 15372
import _mod15355 from "module_15355" /* 15355 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15355(arg0, arg2);
  const tmp = new _mod15355(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};