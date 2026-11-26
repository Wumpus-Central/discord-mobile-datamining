// === Module 15521: ? ===

// Module 15521
import _mod15504 from "module_15504" /* 15504 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15504(arg0, arg2);
  const tmp = new _mod15504(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};