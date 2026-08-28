// === Module 13941: ? ===

// Module 13941
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13888 */;
import _mod13922 from "module_13922" /* 13922 */;
import defineProperty from "defineProperty" /* 13939 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13922(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});