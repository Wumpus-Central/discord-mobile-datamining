// === Module 14117: ? ===

// Module 14117
import _mod14064 from "module_14064" /* 14064 */;
import _mod14098 from "module_14098" /* 14098 */;
import defineProperty2 from "defineProperty2" /* 14115 */;


export default _mod14064 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14098(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});