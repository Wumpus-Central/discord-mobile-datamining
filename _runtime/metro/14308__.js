// === Module 14308: ? ===

// Module 14308
import _mod14291 from "module_14291" /* 14291 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14291(arg0, arg2);
  const tmp = new _mod14291(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};