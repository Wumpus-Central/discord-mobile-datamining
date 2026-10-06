// _runtime/04973_cloneBuffer.js
import _mod524 from "metro/00524__.js";

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
const tmp2 = tmp && typeof module === "object" && module && !module.nodeType && module;
let _Buffer;
if (tmp2) {
  if (tmp2.exports === tmp) {
    _Buffer = _mod524.Buffer;
  }
}
let allocUnsafe;
if (_Buffer) {
  allocUnsafe = _Buffer.allocUnsafe;
}

export default function cloneBuffer(copy, arg1) {
  const tmp = arg1;
  if (tmp) {
    return copy.slice();
  } else {
    let constructor;
    if (allocUnsafe) {
      constructor = tmp2(length);
    } else {
      const self = this;
      const self2 = this;
      constructor = new copy.constructor(length);
    }
    copy.copy(constructor);
    return constructor;
  }
}
