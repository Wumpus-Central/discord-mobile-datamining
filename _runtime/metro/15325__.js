// === Module 15325: ? ===

// Module 15325
import _mod15308 from "module_15308" /* 15308 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15308(arg0, arg2);
  const tmp = new _mod15308(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};