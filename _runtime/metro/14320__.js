// === Module 14320: ? ===

// Module 14320
import _mod14303 from "module_14303" /* 14303 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14303(arg0, arg2);
  const tmp = new _mod14303(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};