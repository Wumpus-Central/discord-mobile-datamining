// _runtime/00638_baseToString.js
import _mod514 from "metro/00514__.js";
import _mod523 from "metro/00523__.js";
import isSymbol from "00553_isSymbol.js";
import arrayMap from "00639_arrayMap.js";

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
  } else if (isSymbol(str)) {
    let str3 = "";
    if (toString) {
      str3 = toString.call(str);
    }
    return str3;
  } else {
    let str2;
    const text = `${str}`;
    if ("0" !== `${"0"}`) {
      str2 = text;
    } else {
      str2 = "-0";
    }
    return str2;
  }
}

export default baseToString;
