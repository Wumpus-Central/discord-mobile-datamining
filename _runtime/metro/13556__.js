// _runtime/metro/13556__.js
import { defineProperty } from "../13554_defineProperty.js";
import { 13537__ } from "13537__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13537__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});