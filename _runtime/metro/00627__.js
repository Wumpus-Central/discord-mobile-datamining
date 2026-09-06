// === Module 627: ? ===

// Module 627
import _mod514 from "module_514" /* 514 */;
import _mod523 from "module_523" /* 523 */;

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
    return "" + tmp5(628)(str, baseToString);
  } else if (tmp5(553)(str)) {
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