// === Module 4469: differenceInBusinessDays ===

// Module 4469 (differenceInBusinessDays)
import module_4437_mod from "module_4437" /* 4437 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4451 */;
import module_4470_mod from "module_4470" /* 4470 */;
import module_4471_mod from "module_4471" /* 4471 */;
import module_4440_mod from "module_4440" /* 4440 */;
import _typeof_mod from "module_4289" /* 4289 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;
import module_4293_mod from "module_4293" /* 4293 */;

let module_4437 = module_4437_mod;
if (!module_4437) {
  const obj = { default: module_4437 };
  let tmp3 = obj;
} else {
  tmp3 = module_4437;
}
module_4437 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4470 = module_4470_mod;
if (!module_4470) {
  const obj3 = { default: module_4470 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4470;
}
module_4470 = tmp7;
let module_4471 = module_4471_mod;
if (!module_4471) {
  const obj4 = { default: module_4471 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4471;
}
module_4471 = tmp9;
let module_4440 = module_4440_mod;
if (!module_4440) {
  const obj5 = { default: module_4440 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4440;
}
module_4440 = tmp11;
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
let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj8 = { default: module_4293 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4293;
}
module_4293 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4471.default(defaultResult1)) {
    if (module_4471.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4293.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4437.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4470.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4440.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4437.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4470.default(defaultResult1, defaultResult6));
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