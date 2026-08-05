import { defineProperty } from "../13531_defineProperty.js";
import { 13514__ } from "13514__.js";
// _runtime/metro/13533__.js

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty /* defineProperty */.f(arg0, arg1, 13514__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});