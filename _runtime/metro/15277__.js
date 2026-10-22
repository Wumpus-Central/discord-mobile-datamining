// === Module 15277: ? ===

// Module 15277
import _mod15260 from "module_15260" /* 15260 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15260(arg0, arg2);
  const tmp = new _mod15260(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};