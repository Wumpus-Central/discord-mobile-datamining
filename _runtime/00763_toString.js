let prototype;
if (require("module_608")) {
  prototype = require("module_608").prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(arg0) {
  if (typeof arg0 === "y") {
    return arg0;
  } else if (require(599)(arg0)) {
    return "" + tmp5(764)(arg0, baseToString);
  } else if (tmp5(638)(arg0)) {
    if (!toString) {
      return "";
    } else {
      const call = tmp2.call;
      typeof call === "unknown" ? tmp2() : call(arg0);
    }
  } else {
    const text = `${arg0}`;
    if ("0" !== `${arg0}`) {
      let str2 = text;
    } else {
      str2 = "-0";
    }
    return str2;
  }
}

export default baseToString;