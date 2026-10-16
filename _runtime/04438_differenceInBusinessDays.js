// === Module 4438: differenceInBusinessDays ===

// Module 4438 (differenceInBusinessDays)
import module_4406_mod from "module_4406" /* 4406 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4420 */;
import module_4439_mod from "module_4439" /* 4439 */;
import module_4440_mod from "module_4440" /* 4440 */;
import module_4409_mod from "module_4409" /* 4409 */;
import _typeof_mod from "module_4258" /* 4258 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;
import module_4262_mod from "module_4262" /* 4262 */;

let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj = { default: module_4406 };
  let tmp3 = obj;
} else {
  tmp3 = module_4406;
}
module_4406 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj3 = { default: module_4439 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4439;
}
module_4439 = tmp7;
let module_4440 = module_4440_mod;
if (!module_4440) {
  const obj4 = { default: module_4440 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4440;
}
module_4440 = tmp9;
let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj5 = { default: module_4409 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4409;
}
module_4409 = tmp11;
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
let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj8 = { default: module_4262 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4262;
}
module_4262 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4440.default(defaultResult1)) {
    if (module_4440.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4262.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4406.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4439.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4409.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4406.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4439.default(defaultResult1, defaultResult6));
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