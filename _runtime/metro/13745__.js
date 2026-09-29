// === Module 13745: ? ===

// Module 13745
import _mod13728 from "module_13728" /* 13728 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13728(arg0, arg2);
  const tmp = new _mod13728(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};