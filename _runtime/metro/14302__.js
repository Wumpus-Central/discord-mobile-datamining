// === Module 14302: ? ===

// Module 14302
import _mod14285 from "module_14285" /* 14285 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14285(arg0, arg2);
  const tmp = new _mod14285(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};