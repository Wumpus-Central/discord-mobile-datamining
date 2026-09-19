// === Module 14296: ? ===

// Module 14296
import _mod14279 from "module_14279" /* 14279 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14279(arg0, arg2);
  const tmp = new _mod14279(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};