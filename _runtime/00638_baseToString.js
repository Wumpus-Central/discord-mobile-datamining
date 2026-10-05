// === Module 638: baseToString ===

// Module 638 (baseToString)
import _mod514 from "module_514" /* 514 */;
import _mod523 from "module_523" /* 523 */;
import isSymbol from "isSymbol" /* 553 */;
import arrayMap from "arrayMap" /* 639 */;

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