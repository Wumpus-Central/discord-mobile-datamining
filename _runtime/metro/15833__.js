// === Module 15833: ? ===

// Module 15833
import _mod15816 from "module_15816" /* 15816 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15816(arg0, arg2);
  const tmp = new _mod15816(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};