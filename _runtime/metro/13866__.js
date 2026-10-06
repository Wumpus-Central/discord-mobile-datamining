// === Module 13866: ? ===

// Module 13866
import _mod13849 from "module_13849" /* 13849 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13849(arg0, arg2);
  const tmp = new _mod13849(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};