// _runtime/04451_Call.js
import { getEvalledConstructor } from "04429_getEvalledConstructor.js";
let tmp = require("getEvalledConstructor")("%Reflect.apply%", true);
if (!tmp) {
  tmp = require("callBoundIntrinsic")("Function.prototype.apply");
}

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (getEvalledConstructor(tmp)) {
    return tmp(arg0, arg1, tmp);
  } else {
    const tmp6 = new tmp2(541)("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
  tmp2 = require;
};