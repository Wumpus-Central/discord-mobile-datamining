// === Module 13848: ? ===

// Module 13848
import _mod13831 from "module_13831" /* 13831 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13831(arg0, arg2);
  const tmp = new _mod13831(arg1, arg2);
  const tmp2 = obj.compare(tmp) || obj.compareBuild(tmp);
  return tmp2;
};