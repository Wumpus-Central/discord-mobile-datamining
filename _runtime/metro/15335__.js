// === Module 15335: ? ===

// Module 15335
import _mod15318 from "module_15318" /* 15318 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15318(arg0, arg2);
  const tmp = new _mod15318(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};