// === Module 3906: differenceInBusinessDays ===

// Module 3906 (differenceInBusinessDays)
import module_3874_mod from "module_3874" /* 3874 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 3888 */;
import module_3907_mod from "module_3907" /* 3907 */;
import module_3908_mod from "module_3908" /* 3908 */;
import module_3877_mod from "module_3877" /* 3877 */;
import _typeof_mod from "module_3726" /* 3726 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;
import module_3730_mod from "module_3730" /* 3730 */;

let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_3907 = module_3907_mod;
if (!module_3907) {
  const obj3 = { default: module_3907 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3907;
}
module_3907 = tmp7;
let module_3908 = module_3908_mod;
if (!module_3908) {
  const obj4 = { default: module_3908 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3908;
}
module_3908 = tmp9;
let module_3877 = module_3877_mod;
if (!module_3877) {
  const obj5 = { default: module_3877 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3877;
}
module_3877 = tmp11;
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
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj8 = { default: module_3730 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3730;
}
module_3730 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3908.default(defaultResult1)) {
    if (module_3908.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3730.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3874.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3907.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3877.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3874.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3907.default(defaultResult1, defaultResult6));
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