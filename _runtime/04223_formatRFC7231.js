// _runtime/04223_formatRFC7231.js
import toDate_mod from "03964_toDate.js";
import isValid_mod from "04146_isValid.js";
import addLeadingZeros_mod from "04207_addLeadingZeros.js";

let tmp3;
let tmp5;
let tmp7;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let isValid = isValid_mod;
if (!isValid) {
  tmp5 = { default: isValid };
  const obj2 = { default: isValid };
} else {
  tmp5 = isValid;
}
isValid = tmp5;
let addLeadingZeros = addLeadingZeros_mod;
if (!addLeadingZeros) {
  tmp7 = { default: addLeadingZeros };
  const obj3 = { default: addLeadingZeros };
} else {
  tmp7 = addLeadingZeros;
}
addLeadingZeros = tmp7;
let closure_3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let closure_4 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function formatRFC7231(arg0) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = toDate.default(arg0);
    if (isValid.default(defaultResult)) {
      const tmp5 = closure_3[defaultResult.getUTCDay(defaultResult)];
      const defaultResult1 = addLeadingZeros.default(defaultResult.getUTCDate(), 2);
      const tmp9 = closure_4[defaultResult.getUTCMonth(defaultResult)];
      const uTCFullYear = defaultResult.getUTCFullYear();
      const concat = "".concat;
      const defaultResult2 = addLeadingZeros.default(defaultResult.getUTCHours(), 2);
      const defaultResult3 = addLeadingZeros.default(defaultResult.getUTCMinutes(), 2);
      const defaultResult4 = addLeadingZeros.default(defaultResult.getUTCSeconds(), 2);
      const combined = "".concat(tmp5, ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(tmp9, " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(defaultResult4, " GMT");
    } else {
      const _RangeError = RangeError;
      const self = this;
      const self2 = this;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
}
