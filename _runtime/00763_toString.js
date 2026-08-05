import { 00599__ } from "metro/00599__.js";
// _runtime/00763_toString.js
let prototype;
if (require("module_608")) {
  prototype = require("module_608").prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(str) {
  if (typeof str === "string") {
    return str;
  } else if (00599__(str)) {
    return "" + tmp5(764)(str, baseToString);
  } else if (tmp5(638)(str)) {
    if (!toString) {
      return "";
    } else {
      const call = tmp2.call;
      typeof call === "unknown" ? tmp2() : call(str);
    }
  } else {
    const text = `${str}`;
    if ("0" !== `${str}`) {
      let str2 = text;
    } else {
      str2 = "-0";
    }
    return str2;
  }
}

export default baseToString;