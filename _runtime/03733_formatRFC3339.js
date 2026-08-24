// === Module 3733: formatRFC3339 ===

// Module 3733 (formatRFC3339)
import _typeof from "_typeof" /* 3475 */;
import isValid from "isValid" /* 3657 */;
import addLeadingZeros from "addLeadingZeros" /* 3718 */;
import toInteger from "toInteger" /* 3479 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!isValid) {
  obj = { default: null };
  obj[0] = isValid;
  let tmp5 = obj;
} else {
  tmp5 = isValid;
}
isValid = tmp5;
if (!addLeadingZeros) {
  obj = { default: null };
  obj[0] = addLeadingZeros;
  let tmp7 = obj;
} else {
  tmp7 = addLeadingZeros;
}
addLeadingZeros = tmp7;
if (!toInteger) {
  const obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;

export default function formatRFC3339(arg0, fractionDigits) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(arg0);
    if (isValid.default(defaultResult)) {
      fractionDigits = undefined;
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
      const NumberResult = Number(num2);
      if (NumberResult >= 0) {
        if (NumberResult <= 3) {
          const defaultResult1 = addLeadingZeros.default(defaultResult.getDate(), 2);
          const fullYear = defaultResult.getFullYear();
          const defaultResult2 = addLeadingZeros.default(defaultResult.getMonth() + 1, 2);
          const defaultResult3 = addLeadingZeros.default(defaultResult.getHours(), 2);
          let str4 = "";
          const defaultResult4 = addLeadingZeros.default(defaultResult.getMinutes(), 2);
          if (NumberResult > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const milliseconds = defaultResult.getMilliseconds();
            str4 = `.${obj.default(tmp20(tmp19 * Math.pow(10, tmp8 - 3)), tmp8)}`;
          }
          const timezoneOffset = defaultResult.getTimezoneOffset();
          let str6 = "Z";
          if (0 !== timezoneOffset) {
            const _Math3 = Math;
            const absolute = Math.abs(timezoneOffset);
            let str7 = "-";
            const defaultResult6 = obj.default(toInteger.default(absolute / 60), 2);
            if (timezoneOffset < 0) {
              str7 = "+";
            }
            const combined = "".concat(str7);
            const combined1 = combined.concat(defaultResult6, ":");
            str6 = combined1.concat(obj.default(absolute % 60, 2));
            const defaultResult7 = obj.default(absolute % 60, 2);
          }
          const concat = "".concat;
          const combined2 = "".concat(fullYear, "-");
          const combined3 = combined2.concat(defaultResult2, "-");
          const combined4 = combined3.concat(defaultResult1, "T");
          const combined5 = combined4.concat(defaultResult3, ":");
          const combined6 = combined5.concat(defaultResult4, ":");
          const combined7 = combined6.concat(addLeadingZeros.default(defaultResult.getSeconds(), 2));
          const combined8 = combined7.concat(str4);
          return combined8.concat(str6);
        }
      }
      const _RangeError2 = RangeError;
      const rangeError = new RangeError("fractionDigits must be between 0 and 3 inclusively");
      throw rangeError;
    } else {
      const _RangeError = RangeError;
      const rangeError1 = new RangeError("Invalid time value");
      throw rangeError1;
    }
  }
};
export default exports.default;