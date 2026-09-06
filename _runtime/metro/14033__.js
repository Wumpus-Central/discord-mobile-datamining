// === Module 14033: ? ===

// Module 14033
import _mod14016 from "module_14016" /* 14016 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14016(arg0, arg2);
  const tmp = new _mod14016(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};