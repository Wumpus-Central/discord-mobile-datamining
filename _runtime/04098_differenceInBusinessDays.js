// === Module 4098: differenceInBusinessDays ===

// Module 4098 (differenceInBusinessDays)
import module_4066_mod from "module_4066" /* 4066 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4080 */;
import module_4099_mod from "module_4099" /* 4099 */;
import module_4100_mod from "module_4100" /* 4100 */;
import module_4069_mod from "module_4069" /* 4069 */;
import _typeof_mod from "module_3918" /* 3918 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;
import module_3922_mod from "module_3922" /* 3922 */;

let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj = { default: module_4066 };
  let tmp3 = obj;
} else {
  tmp3 = module_4066;
}
module_4066 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4099 = module_4099_mod;
if (!module_4099) {
  const obj3 = { default: module_4099 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4099;
}
module_4099 = tmp7;
let module_4100 = module_4100_mod;
if (!module_4100) {
  const obj4 = { default: module_4100 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4100;
}
module_4100 = tmp9;
let module_4069 = module_4069_mod;
if (!module_4069) {
  const obj5 = { default: module_4069 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4069;
}
module_4069 = tmp11;
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
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj8 = { default: module_3922 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3922;
}
module_3922 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4100.default(defaultResult1)) {
    if (module_4100.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3922.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4066.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4099.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4069.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4066.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4099.default(defaultResult1, defaultResult6));
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