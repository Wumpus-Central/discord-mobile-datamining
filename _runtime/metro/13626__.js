// _runtime/metro/13626__.js
import { defineProperty } from "../13624_defineProperty.js";
import { 13607__ } from "13607__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13607__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});