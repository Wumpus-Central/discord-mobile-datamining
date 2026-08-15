// _runtime/metro/13729__.js
import { defineProperty } from "../13727_defineProperty.js";
import { 13710__ } from "13710__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13710__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});