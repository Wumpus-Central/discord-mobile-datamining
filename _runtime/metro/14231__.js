// === Module 14231: ? ===

// Module 14231
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14178 */;
import _mod14212 from "module_14212" /* 14212 */;
import defineProperty from "defineProperty" /* 14229 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14212(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});