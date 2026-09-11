// === Module 14084: ? ===

// Module 14084
import _mod14067 from "module_14067" /* 14067 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14067(arg0, arg2);
  const tmp = new _mod14067(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};