// === Module 763: toString ===

// Module 763 (toString)
import _mod599 from "module_599" /* 599 */;
import _mod608 from "module_608" /* 608 */;
import isSymbol from "isSymbol" /* 638 */;
import arrayMap from "arrayMap" /* 764 */;

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