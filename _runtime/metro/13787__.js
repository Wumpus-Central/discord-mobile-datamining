// _runtime/metro/13787__.js
import getOwnPropertyDescriptor from "../13734_getOwnPropertyDescriptor.js";
import _mod13768 from "13768__.js";
import defineProperty from "../13785_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13768(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});