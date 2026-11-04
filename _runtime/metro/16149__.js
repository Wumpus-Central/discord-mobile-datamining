// === Module 16149: ? ===

// Module 16149
import _mod16132 from "module_16132" /* 16132 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16132(arg0, arg2);
  const tmp = new _mod16132(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};