// _runtime/metro/13542__.js
import { defineProperty } from "../13540_defineProperty.js";
import { 13523__ } from "13523__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13523__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});