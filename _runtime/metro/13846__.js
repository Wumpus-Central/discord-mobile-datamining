// === Module 13846: ? ===

// Module 13846
import _mod13829 from "module_13829" /* 13829 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13829(arg0, arg2);
  const tmp = new _mod13829(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};