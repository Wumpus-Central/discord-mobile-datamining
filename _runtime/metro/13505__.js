// _runtime/metro/13505__.js
import { defineProperty } from "../13503_defineProperty.js";
import { 13486__ } from "13486__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13486__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});