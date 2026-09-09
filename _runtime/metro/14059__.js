// === Module 14059: ? ===

// Module 14059
import _mod14042 from "module_14042" /* 14042 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14042(arg0, arg2);
  const tmp = new _mod14042(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};