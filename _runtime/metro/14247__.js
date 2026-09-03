// _runtime/metro/14247__.js
import getOwnPropertyDescriptor from "../14194_getOwnPropertyDescriptor.js";
import _mod14228 from "14228__.js";
import defineProperty from "../14245_defineProperty.js";

export default getOwnPropertyDescriptor
  ? (arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14228(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
