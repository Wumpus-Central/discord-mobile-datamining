// === Module 15917: ? ===

// Module 15917
import _mod15900 from "module_15900" /* 15900 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15900(arg0, arg2);
  const tmp = new _mod15900(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};