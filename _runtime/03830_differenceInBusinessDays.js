// === Module 3830: differenceInBusinessDays ===

// Module 3830 (differenceInBusinessDays)
import module_3798 from "module_3798" /* 3798 */;
import differenceInCalendarDays from "differenceInCalendarDays" /* 3812 */;
import module_3831 from "module_3831" /* 3831 */;
import module_3832 from "module_3832" /* 3832 */;
import module_3801 from "module_3801" /* 3801 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;
import module_3654 from "module_3654" /* 3654 */;

if (!module_3798) {
  let obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
if (!differenceInCalendarDays) {
  obj = { default: differenceInCalendarDays };
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
if (!module_3831) {
  obj = { default: module_3831 };
  let tmp7 = obj;
} else {
  tmp7 = module_3831;
}
module_3831 = tmp7;
if (!module_3832) {
  const obj1 = { default: module_3832 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3832;
}
module_3832 = tmp9;
if (!module_3801) {
  const obj2 = { default: module_3801 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3801;
}
module_3801 = tmp11;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp13 = obj3;
} else {
  tmp13 = _typeof;
}
_typeof = tmp13;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp15 = obj4;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
if (!module_3654) {
  const obj5 = { default: module_3654 };
  let tmp17 = obj5;
} else {
  tmp17 = module_3654;
}
module_3654 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3832.default(defaultResult1)) {
    if (module_3832.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3654.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3798.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3831.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3801.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3798.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3831.default(defaultResult1, defaultResult6));
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