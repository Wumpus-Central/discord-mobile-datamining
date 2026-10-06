// === Module 14135: ? ===

// Module 14135
import _mod14082 from "module_14082" /* 14082 */;
import _mod14116 from "module_14116" /* 14116 */;
import defineProperty2 from "defineProperty2" /* 14133 */;


export default _mod14082 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14116(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});