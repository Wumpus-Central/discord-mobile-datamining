// _runtime/04093_differenceInBusinessDays.js
import module_4061_mod from "metro/04061__.js";
import differenceInCalendarDays_mod from "04075_differenceInCalendarDays.js";
import module_4094_mod from "metro/04094__.js";
import module_4095_mod from "metro/04095__.js";
import module_4064_mod from "metro/04064__.js";
import _typeof_mod from "metro/03913__.js";
import requiredArgs_mod from "03914_requiredArgs.js";
import module_3917_mod from "metro/03917__.js";

let module_4061 = module_4061_mod;
if (!module_4061) {
  const obj = { default: module_4061 };
  let tmp3 = obj;
} else {
  tmp3 = module_4061;
}
module_4061 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4094 = module_4094_mod;
if (!module_4094) {
  const obj3 = { default: module_4094 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4094;
}
module_4094 = tmp7;
let module_4095 = module_4095_mod;
if (!module_4095) {
  const obj4 = { default: module_4095 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4095;
}
module_4095 = tmp9;
let module_4064 = module_4064_mod;
if (!module_4064) {
  const obj5 = { default: module_4064 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4064;
}
module_4064 = tmp11;
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
let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj8 = { default: module_3917 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3917;
}
module_3917 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4095.default(defaultResult1)) {
    if (module_4095.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3917.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4061.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4094.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4064.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4061.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4094.default(defaultResult1, defaultResult6));
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