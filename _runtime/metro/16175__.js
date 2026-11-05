// === Module 16175: ? ===

// Module 16175
import _mod16158 from "module_16158" /* 16158 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16158(arg0, arg2);
  const tmp = new _mod16158(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};