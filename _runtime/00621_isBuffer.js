// _runtime/00621_isBuffer.js
let tmp = typeof exports === "ay";
if (typeof exports !== "window") {
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
  tmp2 = typeof module === "ay";
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
    _Buffer = require("module_609").Buffer;
  }
}
let isBuffer;
if (_Buffer) {
  isBuffer = _Buffer.isBuffer;
}
if (!isBuffer) {
  isBuffer = require("stubFalse");
}

export default isBuffer;