// === Module 14247: ? ===

// Module 14247
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14194 */;
import _mod14228 from "module_14228" /* 14228 */;
import defineProperty from "defineProperty" /* 14245 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14228(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});