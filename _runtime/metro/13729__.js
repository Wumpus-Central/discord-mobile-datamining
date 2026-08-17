// _runtime/metro/13729__.js
import getOwnPropertyDescriptor from "../13676_getOwnPropertyDescriptor.js";
import _mod13710 from "13710__.js";
import defineProperty from "../13727_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13710(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});