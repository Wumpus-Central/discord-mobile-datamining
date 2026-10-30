// === Module 15872: ? ===

// Module 15872
import _mod15855 from "module_15855" /* 15855 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15855(arg0, arg2);
  const tmp = new _mod15855(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};