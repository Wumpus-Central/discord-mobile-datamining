// === Module 4435: differenceInBusinessDays ===

// Module 4435 (differenceInBusinessDays)
import module_4403_mod from "module_4403" /* 4403 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4417 */;
import module_4436_mod from "module_4436" /* 4436 */;
import module_4437_mod from "module_4437" /* 4437 */;
import module_4406_mod from "module_4406" /* 4406 */;
import _typeof_mod from "module_4255" /* 4255 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import module_4259_mod from "module_4259" /* 4259 */;

let module_4403 = module_4403_mod;
if (!module_4403) {
  const obj = { default: module_4403 };
  let tmp3 = obj;
} else {
  tmp3 = module_4403;
}
module_4403 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj3 = { default: module_4436 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4436;
}
module_4436 = tmp7;
let module_4437 = module_4437_mod;
if (!module_4437) {
  const obj4 = { default: module_4437 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4437;
}
module_4437 = tmp9;
let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj5 = { default: module_4406 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4406;
}
module_4406 = tmp11;
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
let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj8 = { default: module_4259 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4259;
}
module_4259 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4437.default(defaultResult1)) {
    if (module_4437.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4259.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4403.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4436.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4406.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4403.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4436.default(defaultResult1, defaultResult6));
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