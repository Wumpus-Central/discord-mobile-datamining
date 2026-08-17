// _runtime/00763_toString.js
import _mod599 from "module_599" /* 599 */;
import _mod608 from "module_608" /* 608 */;

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