// _runtime/metro/13628__.js
import { defineProperty } from "../13626_defineProperty.js";
import { 13609__ } from "13609__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13609__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});