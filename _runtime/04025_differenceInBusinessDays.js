// === Module 4025: differenceInBusinessDays ===

// Module 4025 (differenceInBusinessDays)
import module_3993_mod from "module_3993" /* 3993 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4007 */;
import module_4026_mod from "module_4026" /* 4026 */;
import module_4027_mod from "module_4027" /* 4027 */;
import module_3996_mod from "module_3996" /* 3996 */;
import _typeof_mod from "module_3845" /* 3845 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;
import module_3849_mod from "module_3849" /* 3849 */;

let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj = { default: module_3993 };
  let tmp3 = obj;
} else {
  tmp3 = module_3993;
}
module_3993 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4026 = module_4026_mod;
if (!module_4026) {
  const obj3 = { default: module_4026 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4026;
}
module_4026 = tmp7;
let module_4027 = module_4027_mod;
if (!module_4027) {
  const obj4 = { default: module_4027 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4027;
}
module_4027 = tmp9;
let module_3996 = module_3996_mod;
if (!module_3996) {
  const obj5 = { default: module_3996 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3996;
}
module_3996 = tmp11;
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
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj8 = { default: module_3849 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3849;
}
module_3849 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4027.default(defaultResult1)) {
    if (module_4027.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3849.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3993.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4026.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3996.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3993.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4026.default(defaultResult1, defaultResult6));
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