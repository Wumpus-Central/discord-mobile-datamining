// === Module 14125: ? ===

// Module 14125
import _mod14108 from "module_14108" /* 14108 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14108(arg0, arg2);
  const tmp = new _mod14108(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};