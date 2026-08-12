// _runtime/metro/13693__.js
import { defineProperty } from "../13691_defineProperty.js";
import { 13674__ } from "13674__.js";

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, 13674__(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});