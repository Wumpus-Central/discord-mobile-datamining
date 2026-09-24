// === Module 14398: ? ===

// Module 14398
import _mod14381 from "module_14381" /* 14381 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14381(arg0, arg2);
  const tmp = new _mod14381(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};