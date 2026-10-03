// _runtime/04138_differenceInBusinessDays.js
import module_4106_mod from "metro/04106__.js";
import differenceInCalendarDays_mod from "04120_differenceInCalendarDays.js";
import module_4139_mod from "metro/04139__.js";
import module_4140_mod from "metro/04140__.js";
import module_4109_mod from "metro/04109__.js";
import _typeof_mod from "metro/03958__.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import module_3962_mod from "metro/03962__.js";

let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj = { default: module_4106 };
  let tmp3 = obj;
} else {
  tmp3 = module_4106;
}
module_4106 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4139 = module_4139_mod;
if (!module_4139) {
  const obj3 = { default: module_4139 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4139;
}
module_4139 = tmp7;
let module_4140 = module_4140_mod;
if (!module_4140) {
  const obj4 = { default: module_4140 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4140;
}
module_4140 = tmp9;
let module_4109 = module_4109_mod;
if (!module_4109) {
  const obj5 = { default: module_4109 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4109;
}
module_4109 = tmp11;
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
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj8 = { default: module_3962 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3962;
}
module_3962 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4140.default(defaultResult1)) {
    if (module_4140.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3962.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4106.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4139.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4109.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4106.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4139.default(defaultResult1, defaultResult6));
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