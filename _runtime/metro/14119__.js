// === Module 14119: ? ===

// Module 14119
import _mod14102 from "module_14102" /* 14102 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14102(arg0, arg2);
  const tmp = new _mod14102(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};