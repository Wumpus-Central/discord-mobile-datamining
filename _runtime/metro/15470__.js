// === Module 15470: ? ===

// Module 15470
import _mod15453 from "module_15453" /* 15453 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15453(arg0, arg2);
  const tmp = new _mod15453(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};