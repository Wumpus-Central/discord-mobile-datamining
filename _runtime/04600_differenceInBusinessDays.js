// === Module 4600: differenceInBusinessDays ===

// Module 4600 (differenceInBusinessDays)
import module_4568_mod from "module_4568" /* 4568 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4582 */;
import module_4601_mod from "module_4601" /* 4601 */;
import module_4602_mod from "module_4602" /* 4602 */;
import module_4571_mod from "module_4571" /* 4571 */;
import _typeof_mod from "module_4420" /* 4420 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;
import module_4424_mod from "module_4424" /* 4424 */;

let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj = { default: module_4568 };
  let tmp3 = obj;
} else {
  tmp3 = module_4568;
}
module_4568 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4601 = module_4601_mod;
if (!module_4601) {
  const obj3 = { default: module_4601 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4601;
}
module_4601 = tmp7;
let module_4602 = module_4602_mod;
if (!module_4602) {
  const obj4 = { default: module_4602 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4602;
}
module_4602 = tmp9;
let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj5 = { default: module_4571 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4571;
}
module_4571 = tmp11;
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
let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj8 = { default: module_4424 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4424;
}
module_4424 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4602.default(defaultResult1)) {
    if (module_4602.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4424.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4568.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4601.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4571.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4568.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4601.default(defaultResult1, defaultResult6));
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