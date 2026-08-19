// _runtime/00763_toString.js
import _mod599 from "metro/00599__.js";
import _mod608 from "metro/00608__.js";
import isSymbol from "00638_isSymbol.js";
import arrayMap from "00764_arrayMap.js";

let prototype;
if (_mod608) {
  prototype = _mod608.prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(str) {
  if (typeof str === "string") {
    return str;
  } else if (_mod599(str)) {
    return "" + arrayMap(str, baseToString);
  } else if (isSymbol(str)) {
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