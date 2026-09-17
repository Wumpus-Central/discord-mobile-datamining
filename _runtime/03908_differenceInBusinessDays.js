// _runtime/03908_differenceInBusinessDays.js
import module_3876_mod from "metro/03876__.js";
import differenceInCalendarDays_mod from "03890_differenceInCalendarDays.js";
import module_3909_mod from "metro/03909__.js";
import module_3910_mod from "metro/03910__.js";
import module_3879_mod from "metro/03879__.js";
import _typeof_mod from "metro/03728__.js";
import requiredArgs_mod from "03729_requiredArgs.js";
import module_3732_mod from "metro/03732__.js";

let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_3909 = module_3909_mod;
if (!module_3909) {
  const obj3 = { default: module_3909 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3909;
}
module_3909 = tmp7;
let module_3910 = module_3910_mod;
if (!module_3910) {
  const obj4 = { default: module_3910 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3910;
}
module_3910 = tmp9;
let module_3879 = module_3879_mod;
if (!module_3879) {
  const obj5 = { default: module_3879 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3879;
}
module_3879 = tmp11;
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
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj8 = { default: module_3732 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3732;
}
module_3732 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3910.default(defaultResult1)) {
    if (module_3910.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3732.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3876.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3909.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3879.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3876.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3909.default(defaultResult1, defaultResult6));
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