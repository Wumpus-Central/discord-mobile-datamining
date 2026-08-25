// === Module 13822: ? ===

// Module 13822
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13769 */;
import _mod13803 from "module_13803" /* 13803 */;
import defineProperty from "defineProperty" /* 13820 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13803(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});