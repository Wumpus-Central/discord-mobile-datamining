// _runtime/metro/00627__.js
import _mod514 from "00514__.js";
import _mod523 from "00523__.js";
import _mod553 from "00553__.js";
import arrayMap from "../00628_arrayMap.js";

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(str) {
  if (typeof str === "string") {
    return str;
  } else if (_mod514(str)) {
    return "" + arrayMap(str, baseToString);
  } else if (_mod553(str)) {
    if (!toString) {
      return "";
    } else {
      const call = toString.call;
      typeof call === "unknown" ? toString() : call(str);
    }
  } else {
    const text = `${str}`;
    if ("0" !== `${"0"}`) {
      let str2 = text;
    } else {
      str2 = "-0";
    }
    return str2;
  }
}

export default baseToString;
