// === Module 16162: ? ===

// Module 16162
import _mod16145 from "module_16145" /* 16145 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16145(arg0, arg2);
  const tmp = new _mod16145(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};