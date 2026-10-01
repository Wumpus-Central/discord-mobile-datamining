// === Module 13780: ? ===

// Module 13780
import _mod13763 from "module_13763" /* 13763 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13763(arg0, arg2);
  const tmp = new _mod13763(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};