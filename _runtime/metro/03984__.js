// _runtime/metro/03984__.js
import _typeof_mod from "03726__.js";
import module_3908_mod from "03908__.js";
import module_3969_mod from "03969__.js";
import module_3730_mod from "03730__.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3908 = module_3908_mod;
if (!module_3908) {
  const obj2 = { default: module_3908 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3908;
}
module_3908 = tmp5;
let module_3969 = module_3969_mod;
if (!module_3969) {
  const obj3 = { default: module_3969 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3969;
}
module_3969 = tmp7;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj4 = { default: module_3730 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3730;
}
module_3730 = tmp9;

export default function formatRFC3339(arg0, fractionDigits) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(arg0);
    if (module_3908.default(defaultResult)) {
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
          const defaultResult1 = module_3969.default(defaultResult.getDate(), 2);
          const fullYear = defaultResult.getFullYear();
          const defaultResult2 = module_3969.default(defaultResult.getMonth() + 1, 2);
          const defaultResult3 = module_3969.default(defaultResult.getHours(), 2);
          let str4 = "";
          const defaultResult4 = module_3969.default(defaultResult.getMinutes(), 2);
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
            const defaultResult6 = module_3969.default(module_3730.default(absolute / 60), 2);
            if (timezoneOffset < 0) {
              str7 = "+";
            }
            const combined = "".concat(str7);
            const combined1 = combined.concat(defaultResult6, ":");
            str6 = combined1.concat(module_3969.default(absolute % 60, 2));
            const defaultResult7 = module_3969.default(absolute % 60, 2);
          }
          const concat = "".concat;
          const combined2 = "".concat(fullYear, "-");
          const combined3 = combined2.concat(defaultResult2, "-");
          const combined4 = combined3.concat(defaultResult1, "T");
          const combined5 = combined4.concat(defaultResult3, ":");
          const combined6 = combined5.concat(defaultResult4, ":");
          const combined7 = combined6.concat(module_3969.default(defaultResult.getSeconds(), 2));
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