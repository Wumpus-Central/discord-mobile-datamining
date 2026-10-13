// === Module 14664: ? ===

// Module 14664
import _mod14647 from "module_14647" /* 14647 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14647(arg0, arg2);
  const tmp = new _mod14647(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};