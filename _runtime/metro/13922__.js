// _runtime/metro/13922__.js
import getOwnPropertyDescriptor from "../13869_getOwnPropertyDescriptor.js";
import _mod13903 from "13903__.js";
import defineProperty from "../13920_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13903(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});