// _runtime/metro/13729__.js
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13676 */;
import _mod13710 from "module_13710" /* 13710 */;
import defineProperty from "defineProperty" /* 13727 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13710(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});