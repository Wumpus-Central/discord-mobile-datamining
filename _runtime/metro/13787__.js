// === Module 13787: ? ===

// Module 13787
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13734 */;
import _mod13768 from "module_13768" /* 13768 */;
import defineProperty from "defineProperty" /* 13785 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13768(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});