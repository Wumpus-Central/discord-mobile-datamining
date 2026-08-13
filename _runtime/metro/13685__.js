// _runtime/metro/13685__.js
import { defineProperty } from "../13683_defineProperty.js";
import { 13666__ } from "13666__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13666__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});