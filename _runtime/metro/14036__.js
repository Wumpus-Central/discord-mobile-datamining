// === Module 14036: ? ===

// Module 14036
import _mod14019 from "module_14019" /* 14019 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14019(arg0, arg2);
  const tmp = new _mod14019(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};