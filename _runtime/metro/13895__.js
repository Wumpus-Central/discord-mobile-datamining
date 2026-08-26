// _runtime/metro/13895__.js
import getOwnPropertyDescriptor from "../13842_getOwnPropertyDescriptor.js";
import _mod13876 from "13876__.js";
import defineProperty from "../13893_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13876(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});