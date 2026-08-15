// _runtime/03731_formatRFC7231.js
import _typeof from "_typeof";
import isValid from "isValid";
import addLeadingZeros from "addLeadingZeros";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!isValid) {
  obj = { default: null };
  obj[0] = isValid;
  let tmp5 = obj;
} else {
  tmp5 = isValid;
}
let closure_1 = tmp5;
if (!addLeadingZeros) {
  obj = { default: null };
  obj[0] = addLeadingZeros;
  let tmp7 = obj;
} else {
  tmp7 = addLeadingZeros;
}
let closure_3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let closure_4 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function formatRFC7231(arg0) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = tmp3.default(arg0);
    if (tmp5.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      const defaultResult1 = tmp7.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = tmp7.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = tmp7.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(table[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(table2[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(tmp7.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;