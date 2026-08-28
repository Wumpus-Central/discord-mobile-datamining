// _runtime/metro/13941__.js
import getOwnPropertyDescriptor from "../13888_getOwnPropertyDescriptor.js";
import _mod13922 from "13922__.js";
import defineProperty from "../13939_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13922(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});