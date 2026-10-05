// _runtime/metro/01302__.js
import _mod1294 from "01294__.js";
import callBindBasic from "../01303_callBindBasic.js";

let getDunder;
let tmp;
try {
  let tmp2 = globalThis;
  const _Array = Array;
  tmp = [].__proto__ === Array.prototype;
} catch (tmp3) {
  throw tmp3;
}
let tmp4 = tmp && _mod1294;
if (tmp4) {
  const _Object = Object;
  tmp4 = _mod1294(Object.prototype, "__proto__");
}
if (tmp4) {
  if (typeof tmp4.get === "function") {
    const items = [tmp4.get];
    getDunder = callBindBasic(items);
  }
  module.exports = getDunder;
}
getDunder = typeof getPrototypeOf === "function";
if (typeof getPrototypeOf === "function") {
  getDunder = function getDunder(arg0) {
    let tmp2 = arg0;
    if (null != arg0) {
      tmp2 = Object(arg0);
    }
    return getPrototypeOf(tmp2);
  };
}
