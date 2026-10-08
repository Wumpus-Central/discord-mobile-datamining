// === Module 14434: ? ===

// Module 14434
import _mod14381 from "module_14381" /* 14381 */;
import _mod14415 from "module_14415" /* 14415 */;
import _mod14432 from "module_14432" /* 14432 */;


export default _mod14381 ? ((arg0, arg1, arg2) => _mod14432.f(arg0, arg1, _mod14415(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});