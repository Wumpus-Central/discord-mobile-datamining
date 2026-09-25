// === Module 13559: ? ===

// Module 13559
import _mod13542 from "module_13542" /* 13542 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13542(arg0, arg2);
  const tmp = new _mod13542(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};