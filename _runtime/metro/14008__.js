// _runtime/metro/14008__.js
import getOwnPropertyDescriptor from "../13955_getOwnPropertyDescriptor.js";
import _mod13989 from "13989__.js";
import defineProperty from "../14006_defineProperty.js";

export default getOwnPropertyDescriptor
  ? (arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod13989(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
