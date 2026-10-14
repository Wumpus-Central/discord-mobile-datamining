// === Module 14702: ? ===

// Module 14702
import _mod14685 from "module_14685" /* 14685 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14685(arg0, arg2);
  const tmp = new _mod14685(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};