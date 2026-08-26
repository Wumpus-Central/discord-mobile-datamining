// === Module 13895: ? ===

// Module 13895
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13842 */;
import _mod13876 from "module_13876" /* 13876 */;
import defineProperty from "defineProperty" /* 13893 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13876(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});