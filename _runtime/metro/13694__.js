// _runtime/metro/13694__.js
import { defineProperty } from "../13692_defineProperty.js";
import { 13675__ } from "13675__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13675__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});