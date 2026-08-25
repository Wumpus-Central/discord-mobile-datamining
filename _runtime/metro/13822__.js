// _runtime/metro/13822__.js
import getOwnPropertyDescriptor from "../13769_getOwnPropertyDescriptor.js";
import _mod13803 from "13803__.js";
import defineProperty from "../13820_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13803(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});