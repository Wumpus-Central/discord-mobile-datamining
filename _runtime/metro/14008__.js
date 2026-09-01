// === Module 14008: ? ===

// Module 14008
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13955 */;
import _mod13989 from "module_13989" /* 13989 */;
import defineProperty from "defineProperty" /* 14006 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13989(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});