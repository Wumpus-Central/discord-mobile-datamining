// === Module 760: toString ===

// Module 760 (toString)
import _mod596 from "module_596" /* 596 */;
import _mod605 from "module_605" /* 605 */;

let prototype;
if (_mod605) {
  prototype = _mod605.prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(str) {
  if (typeof str === "string") {
    return str;
  } else if (_mod596(str)) {
    return "" + tmp5(761)(str, baseToString);
  } else if (tmp5(635)(str)) {
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