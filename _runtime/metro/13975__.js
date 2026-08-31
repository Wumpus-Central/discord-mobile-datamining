// _runtime/metro/13975__.js
import getOwnPropertyDescriptor from "../13922_getOwnPropertyDescriptor.js";
import _mod13956 from "13956__.js";
import defineProperty from "../13973_defineProperty.js";


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13956(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});