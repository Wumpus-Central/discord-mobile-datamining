// === Module 13975: ? ===

// Module 13975
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13922 */;
import _mod13956 from "module_13956" /* 13956 */;
import defineProperty from "defineProperty" /* 13973 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13956(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});