// === Module 14353: ? ===

// Module 14353
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14300 */;
import _mod14334 from "module_14334" /* 14334 */;
import defineProperty from "defineProperty" /* 14351 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14334(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});