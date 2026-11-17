// === Module 16571: ? ===

// Module 16571
import _mod16554 from "module_16554" /* 16554 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16554(arg0, arg2);
  const tmp = new _mod16554(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};