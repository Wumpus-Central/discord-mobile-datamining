// === Module 4702: differenceInBusinessDays ===

// Module 4702 (differenceInBusinessDays)
import module_4670_mod from "module_4670" /* 4670 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4684 */;
import module_4703_mod from "module_4703" /* 4703 */;
import module_4704_mod from "module_4704" /* 4704 */;
import module_4673_mod from "module_4673" /* 4673 */;
import _typeof_mod from "module_4522" /* 4522 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;
import module_4526_mod from "module_4526" /* 4526 */;

let module_4670 = module_4670_mod;
if (!module_4670) {
  const obj = { default: module_4670 };
  let tmp3 = obj;
} else {
  tmp3 = module_4670;
}
module_4670 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4703 = module_4703_mod;
if (!module_4703) {
  const obj3 = { default: module_4703 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4703;
}
module_4703 = tmp7;
let module_4704 = module_4704_mod;
if (!module_4704) {
  const obj4 = { default: module_4704 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4704;
}
module_4704 = tmp9;
let module_4673 = module_4673_mod;
if (!module_4673) {
  const obj5 = { default: module_4673 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4673;
}
module_4673 = tmp11;
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
let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj8 = { default: module_4526 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4526;
}
module_4526 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4704.default(defaultResult1)) {
    if (module_4704.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4526.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4670.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4703.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4673.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4670.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4703.default(defaultResult1, defaultResult6));
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