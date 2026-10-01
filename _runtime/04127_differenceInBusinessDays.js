// === Module 4127: differenceInBusinessDays ===

// Module 4127 (differenceInBusinessDays)
import module_4095_mod from "module_4095" /* 4095 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4109 */;
import module_4128_mod from "module_4128" /* 4128 */;
import module_4129_mod from "module_4129" /* 4129 */;
import module_4098_mod from "module_4098" /* 4098 */;
import _typeof_mod from "module_3947" /* 3947 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;
import module_3951_mod from "module_3951" /* 3951 */;

let module_4095 = module_4095_mod;
if (!module_4095) {
  const obj = { default: module_4095 };
  let tmp3 = obj;
} else {
  tmp3 = module_4095;
}
module_4095 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4128 = module_4128_mod;
if (!module_4128) {
  const obj3 = { default: module_4128 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4128;
}
module_4128 = tmp7;
let module_4129 = module_4129_mod;
if (!module_4129) {
  const obj4 = { default: module_4129 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4129;
}
module_4129 = tmp9;
let module_4098 = module_4098_mod;
if (!module_4098) {
  const obj5 = { default: module_4098 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4098;
}
module_4098 = tmp11;
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
let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj8 = { default: module_3951 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3951;
}
module_3951 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4129.default(defaultResult1)) {
    if (module_4129.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3951.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4095.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4128.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4098.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4095.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4128.default(defaultResult1, defaultResult6));
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