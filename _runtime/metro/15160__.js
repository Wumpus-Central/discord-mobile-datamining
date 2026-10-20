// === Module 15160: ? ===

// Module 15160
import _mod15143 from "module_15143" /* 15143 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15143(arg0, arg2);
  const tmp = new _mod15143(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};