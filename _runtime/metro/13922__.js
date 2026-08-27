// === Module 13922: ? ===

// Module 13922
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13869 */;
import _mod13903 from "module_13903" /* 13903 */;
import defineProperty from "defineProperty" /* 13920 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13903(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});