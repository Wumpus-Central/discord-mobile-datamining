// _runtime/metro/14353__.js
import getOwnPropertyDescriptor from "../14300_getOwnPropertyDescriptor.js";
import _mod14334 from "14334__.js";
import defineProperty from "../14351_defineProperty.js";

export default getOwnPropertyDescriptor
  ? (arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14334(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
