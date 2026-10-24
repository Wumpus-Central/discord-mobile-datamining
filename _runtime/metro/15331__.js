// === Module 15331: ? ===

// Module 15331
import _mod15314 from "module_15314" /* 15314 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15314(arg0, arg2);
  const tmp = new _mod15314(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};