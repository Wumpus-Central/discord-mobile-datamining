// === Module 3875: differenceInBusinessDays ===

// Module 3875 (differenceInBusinessDays)
import module_3843 from "module_3843" /* 3843 */;
import differenceInCalendarDays from "differenceInCalendarDays" /* 3857 */;
import module_3876 from "module_3876" /* 3876 */;
import module_3877 from "module_3877" /* 3877 */;
import module_3846 from "module_3846" /* 3846 */;
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;
import module_3699 from "module_3699" /* 3699 */;

if (!module_3843) {
  let obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
if (!differenceInCalendarDays) {
  obj = { default: differenceInCalendarDays };
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
if (!module_3876) {
  obj = { default: module_3876 };
  let tmp7 = obj;
} else {
  tmp7 = module_3876;
}
module_3876 = tmp7;
if (!module_3877) {
  const obj1 = { default: module_3877 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3877;
}
module_3877 = tmp9;
if (!module_3846) {
  const obj2 = { default: module_3846 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3846;
}
module_3846 = tmp11;
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
if (!module_3699) {
  const obj5 = { default: module_3699 };
  let tmp17 = obj5;
} else {
  tmp17 = module_3699;
}
module_3699 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3877.default(defaultResult1)) {
    if (module_3877.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3699.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3843.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3876.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3846.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3843.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3876.default(defaultResult1, defaultResult6));
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