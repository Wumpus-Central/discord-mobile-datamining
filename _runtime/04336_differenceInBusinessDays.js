// _runtime/04336_differenceInBusinessDays.js
import module_4304_mod from "metro/04304__.js";
import differenceInCalendarDays_mod from "04318_differenceInCalendarDays.js";
import module_4337_mod from "metro/04337__.js";
import module_4338_mod from "metro/04338__.js";
import module_4307_mod from "metro/04307__.js";
import _typeof_mod from "metro/04156__.js";
import requiredArgs_mod from "04157_requiredArgs.js";
import module_4160_mod from "metro/04160__.js";

let module_4304 = module_4304_mod;
if (!module_4304) {
  const obj = { default: module_4304 };
  let tmp3 = obj;
} else {
  tmp3 = module_4304;
}
module_4304 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4337 = module_4337_mod;
if (!module_4337) {
  const obj3 = { default: module_4337 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4337;
}
module_4337 = tmp7;
let module_4338 = module_4338_mod;
if (!module_4338) {
  const obj4 = { default: module_4338 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4338;
}
module_4338 = tmp9;
let module_4307 = module_4307_mod;
if (!module_4307) {
  const obj5 = { default: module_4307 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4307;
}
module_4307 = tmp11;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj6 = { default: _typeof };
  let tmp13 = obj6;
} else {
  tmp13 = _typeof;
}
_typeof = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj7 = { default: requiredArgs };
  let tmp15 = obj7;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj8 = { default: module_4160 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4160;
}
module_4160 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4338.default(defaultResult1)) {
    if (module_4338.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4160.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4304.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4337.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4307.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4304.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4337.default(defaultResult1, defaultResult6));
      }
      let num6 = 0;
      if (0 !== tmp13) {
        num6 = tmp13;
      }
      return num6;
    }
  }
  return NaN;
};
export default exports.default;