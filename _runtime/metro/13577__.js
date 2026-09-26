// === Module 13577: ? ===

// Module 13577
import _mod13560 from "module_13560" /* 13560 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13560(arg0, arg2);
  const tmp = new _mod13560(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};