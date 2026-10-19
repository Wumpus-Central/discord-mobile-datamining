// === Module 15142: ? ===

// Module 15142
import _mod15125 from "module_15125" /* 15125 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15125(arg0, arg2);
  const tmp = new _mod15125(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};