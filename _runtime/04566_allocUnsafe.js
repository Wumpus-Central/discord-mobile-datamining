// _runtime/04566_allocUnsafe.js
import _mod609 from "metro/00609__.js";

let tmp = typeof exports === "object";
if (typeof exports === "object") {
  tmp = exports;
}
if (tmp) {
  tmp = !exports.nodeType;
}
if (tmp) {
  tmp = exports;
}
let tmp2 = tmp;
if (tmp) {
  tmp2 = typeof module === "object";
}
if (tmp2) {
  tmp2 = module;
}
if (tmp2) {
  tmp2 = !module.nodeType;
}
if (tmp2) {
  tmp2 = module;
}
let _Buffer;
if (tmp2) {
  if (tmp2.exports === tmp) {
    _Buffer = _mod609.Buffer;
  }
}
let allocUnsafe;
if (_Buffer) {
  allocUnsafe = _Buffer.allocUnsafe;
}

export default function cloneBuffer(arr) {
  if (arg1) {
    return arr.slice();
  } else {
    if (allocUnsafe) {
      let constructor = tmp(length);
    } else {
      constructor = new arr.constructor(length);
    }
    arr.copy(constructor);
    return constructor;
  }
};