// === Module 15336: ? ===

// Module 15336
import _mod15319 from "module_15319" /* 15319 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15319(arg0, arg2);
  const tmp = new _mod15319(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};