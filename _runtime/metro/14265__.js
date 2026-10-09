// === Module 14265: ? ===

// Module 14265
import _mod14248 from "module_14248" /* 14248 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14248(arg0, arg2);
  const tmp = new _mod14248(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};