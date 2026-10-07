// === Module 4144: differenceInBusinessDays ===

// Module 4144 (differenceInBusinessDays)
import module_4112_mod from "module_4112" /* 4112 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4126 */;
import module_4145_mod from "module_4145" /* 4145 */;
import module_4146_mod from "module_4146" /* 4146 */;
import module_4115_mod from "module_4115" /* 4115 */;
import _typeof_mod from "module_3964" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import module_3968_mod from "module_3968" /* 3968 */;

let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj = { default: module_4112 };
  let tmp3 = obj;
} else {
  tmp3 = module_4112;
}
module_4112 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4145 = module_4145_mod;
if (!module_4145) {
  const obj3 = { default: module_4145 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4145;
}
module_4145 = tmp7;
let module_4146 = module_4146_mod;
if (!module_4146) {
  const obj4 = { default: module_4146 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4146;
}
module_4146 = tmp9;
let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj5 = { default: module_4115 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4115;
}
module_4115 = tmp11;
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
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj8 = { default: module_3968 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3968;
}
module_3968 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4146.default(defaultResult1)) {
    if (module_4146.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3968.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4112.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4145.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4115.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4112.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4145.default(defaultResult1, defaultResult6));
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