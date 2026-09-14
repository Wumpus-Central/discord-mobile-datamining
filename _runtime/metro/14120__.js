// === Module 14120: ? ===

// Module 14120
import _mod14103 from "module_14103" /* 14103 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14103(arg0, arg2);
  const tmp = new _mod14103(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};