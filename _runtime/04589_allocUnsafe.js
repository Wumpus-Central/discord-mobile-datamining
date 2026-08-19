// === Module 4589: allocUnsafe ===

// Module 4589 (allocUnsafe)
import _mod609 from "module_609" /* 609 */;

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

export default function cloneBuffer(copy) {
  if (arg1) {
    return copy.slice();
  } else {
    if (allocUnsafe) {
      let constructor = tmp(length);
    } else {
      constructor = new copy.constructor(length);
    }
    copy.copy(constructor);
    return constructor;
  }
};