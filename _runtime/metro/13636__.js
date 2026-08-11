// _runtime/metro/13636__.js
import { defineProperty } from "../13634_defineProperty.js";
import { 13617__ } from "13617__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13617__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});