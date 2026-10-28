// === Module 15598: ? ===

// Module 15598
import _mod15581 from "module_15581" /* 15581 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15581(arg0, arg2);
  const tmp = new _mod15581(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};