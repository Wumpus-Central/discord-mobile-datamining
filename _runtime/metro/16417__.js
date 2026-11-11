// === Module 16417: ? ===

// Module 16417
import _mod16400 from "module_16400" /* 16400 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16400(arg0, arg2);
  const tmp = new _mod16400(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};