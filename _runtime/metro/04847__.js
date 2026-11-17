// === Module 4847: ? ===

// Module 4847
import _typeof_mod from "module_4589" /* 4589 */;
import module_4771_mod from "module_4771" /* 4771 */;
import module_4832_mod from "module_4832" /* 4832 */;
import module_4593_mod from "module_4593" /* 4593 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4771 = module_4771_mod;
if (!module_4771) {
  const obj2 = { default: module_4771 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4771;
}
module_4771 = tmp5;
let module_4832 = module_4832_mod;
if (!module_4832) {
  const obj3 = { default: module_4832 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4832;
}
module_4832 = tmp7;
let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj4 = { default: module_4593 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4593;
}
module_4593 = tmp9;

export default function formatRFC3339(arg0, fractionDigits) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(arg0);
    if (module_4771.default(defaultResult)) {
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
          const defaultResult1 = module_4832.default(defaultResult.getDate(), 2);
          const fullYear = defaultResult.getFullYear();
          const defaultResult2 = module_4832.default(defaultResult.getMonth() + 1, 2);
          const defaultResult3 = module_4832.default(defaultResult.getHours(), 2);
          let str4 = "";
          const defaultResult4 = module_4832.default(defaultResult.getMinutes(), 2);
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
            const defaultResult6 = module_4832.default(module_4593.default(absolute / 60), 2);
            if (timezoneOffset < 0) {
              str7 = "+";
            }
            const combined = "".concat(str7);
            const combined1 = combined.concat(defaultResult6, ":");
            str6 = combined1.concat(module_4832.default(absolute % 60, 2));
            const defaultResult7 = module_4832.default(absolute % 60, 2);
          }
          const concat = "".concat;
          const combined2 = "".concat(fullYear, "-");
          const combined3 = combined2.concat(defaultResult2, "-");
          const combined4 = combined3.concat(defaultResult1, "T");
          const combined5 = combined4.concat(defaultResult3, ":");
          const combined6 = combined5.concat(defaultResult4, ":");
          const combined7 = combined6.concat(module_4832.default(defaultResult.getSeconds(), 2));
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