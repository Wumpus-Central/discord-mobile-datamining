import { 00562__ } from "metro/00562__.js";
// _runtime/04600_PromiseResolve.js
const tmp = require("getEvalledConstructor")("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = require("callBind")(tmp);
}

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new 00562__("This environment does not support Promises.");
    throw tmp6;
  }
};