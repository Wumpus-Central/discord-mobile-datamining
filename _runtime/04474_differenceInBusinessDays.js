// _runtime/04474_differenceInBusinessDays.js
import module_4442_mod from "metro/04442__.js";
import differenceInCalendarDays_mod from "04456_differenceInCalendarDays.js";
import module_4475_mod from "metro/04475__.js";
import module_4476_mod from "metro/04476__.js";
import module_4445_mod from "metro/04445__.js";
import _typeof_mod from "metro/04294__.js";
import requiredArgs_mod from "04295_requiredArgs.js";
import module_4298_mod from "metro/04298__.js";

let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj = { default: module_4442 };
  let tmp3 = obj;
} else {
  tmp3 = module_4442;
}
module_4442 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4475 = module_4475_mod;
if (!module_4475) {
  const obj3 = { default: module_4475 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4475;
}
module_4475 = tmp7;
let module_4476 = module_4476_mod;
if (!module_4476) {
  const obj4 = { default: module_4476 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4476;
}
module_4476 = tmp9;
let module_4445 = module_4445_mod;
if (!module_4445) {
  const obj5 = { default: module_4445 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4445;
}
module_4445 = tmp11;
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
let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj8 = { default: module_4298 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4298;
}
module_4298 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4476.default(defaultResult1)) {
    if (module_4476.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4298.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4442.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4475.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4445.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4442.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4475.default(defaultResult1, defaultResult6));
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