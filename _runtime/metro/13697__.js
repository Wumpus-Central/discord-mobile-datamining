// _runtime/metro/13697__.js
import { defineProperty } from "../13695_defineProperty.js";
import { 13678__ } from "13678__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13678__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});