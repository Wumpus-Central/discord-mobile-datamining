// === Module 13772: ? ===

// Module 13772
import _mod13755 from "module_13755" /* 13755 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13755(arg0, arg2);
  const tmp = new _mod13755(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};