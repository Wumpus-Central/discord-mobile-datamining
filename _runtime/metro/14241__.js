// === Module 14241: ? ===

// Module 14241
import _mod14224 from "module_14224" /* 14224 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14224(arg0, arg2);
  const tmp = new _mod14224(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};