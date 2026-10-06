// _runtime/04222_formatRFC3339.js
import toDate_mod from "03964_toDate.js";
import isValid_mod from "04146_isValid.js";
import addLeadingZeros_mod from "04207_addLeadingZeros.js";
import toInteger_mod from "03968_toInteger.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  const obj = { default: toDate };
  tmp3 = obj;
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
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp9 = { default: toInteger };
  const obj4 = { default: toInteger };
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;

export default function formatRFC3339(arg0, fractionDigits) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat3 = "1 arguments required, but only ".concat;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = toDate.default(arg0);
    if (isValid.default(defaultResult)) {
      fractionDigits = undefined;
      const _Number = Number;
      if (null != fractionDigits) {
        fractionDigits = fractionDigits.fractionDigits;
      }
      let num2 = 0;
      if (null !== fractionDigits) {
        num2 = 0;
        if (undefined !== fractionDigits) {
          num2 = fractionDigits;
        }
      }
      const _NumberResult = _Number(num2);
      if (_NumberResult >= 0) {
        if (_NumberResult <= 3) {
          const defaultResult1 = addLeadingZeros.default(defaultResult.getDate(), 2);
          const defaultResult2 = addLeadingZeros.default(defaultResult.getMonth() + 1, 2);
          const fullYear = defaultResult.getFullYear();
          let str4 = "";
          const defaultResult3 = addLeadingZeros.default(defaultResult.getHours(), 2);
          const defaultResult4 = addLeadingZeros.default(defaultResult.getMinutes(), 2);
          const defaultResult5 = addLeadingZeros.default(defaultResult.getSeconds(), 2);
          if (_NumberResult > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const milliseconds = defaultResult.getMilliseconds();
            str4 = `.${obj.default(floor(tmp15 * Math.pow(10, tmp6 - 3)), tmp6)}`;
          }
          const timezoneOffset = defaultResult.getTimezoneOffset();
          let str6 = "Z";
          if (0 !== timezoneOffset) {
            const _Math3 = Math;
            const absolute = Math.abs(timezoneOffset);
            let str7 = "-";
            const concat = "".concat;
            const defaultResult6 = addLeadingZeros.default(toInteger.default(absolute / 60), 2);
            const defaultResult7 = addLeadingZeros.default(absolute % 60, 2);
            if (timezoneOffset < 0) {
              str7 = "+";
            }
            const combined = concat(str7);
            const combined1 = combined.concat(defaultResult6, ":");
            str6 = combined1.concat(defaultResult7);
          }
          const concat2 = "".concat;
          const combined2 = "".concat(fullYear, "-");
          const combined3 = combined2.concat(defaultResult2, "-");
          const combined4 = combined3.concat(defaultResult1, "T");
          const combined5 = combined4.concat(defaultResult3, ":");
          const combined6 = combined5.concat(defaultResult4, ":");
          const combined7 = combined6.concat(defaultResult5);
          const combined8 = combined7.concat(str4);
          return combined8.concat(str6);
        }
      }
      const _RangeError2 = RangeError;
      const self3 = this;
      const self4 = this;
      const rangeError = new RangeError("fractionDigits must be between 0 and 3 inclusively");
      throw rangeError;
    } else {
      const _RangeError = RangeError;
      const self = this;
      const self2 = this;
      const rangeError1 = new RangeError("Invalid time value");
      throw rangeError1;
    }
  }
}
