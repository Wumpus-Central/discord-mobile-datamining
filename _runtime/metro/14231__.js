// _runtime/metro/14231__.js
import getOwnPropertyDescriptor from "../14178_getOwnPropertyDescriptor.js";
import _mod14212 from "14212__.js";
import defineProperty from "../14229_defineProperty.js";

export default getOwnPropertyDescriptor
  ? (arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14212(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
