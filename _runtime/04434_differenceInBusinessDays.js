// _runtime/04434_differenceInBusinessDays.js
import module_4402_mod from "metro/04402__.js";
import differenceInCalendarDays_mod from "04416_differenceInCalendarDays.js";
import module_4435_mod from "metro/04435__.js";
import module_4436_mod from "metro/04436__.js";
import module_4405_mod from "metro/04405__.js";
import _typeof_mod from "metro/04254__.js";
import requiredArgs_mod from "04255_requiredArgs.js";
import module_4258_mod from "metro/04258__.js";

let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj = { default: module_4402 };
  let tmp3 = obj;
} else {
  tmp3 = module_4402;
}
module_4402 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj3 = { default: module_4435 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4435;
}
module_4435 = tmp7;
let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj4 = { default: module_4436 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4436;
}
module_4436 = tmp9;
let module_4405 = module_4405_mod;
if (!module_4405) {
  const obj5 = { default: module_4405 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4405;
}
module_4405 = tmp11;
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
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj8 = { default: module_4258 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4258;
}
module_4258 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4436.default(defaultResult1)) {
    if (module_4436.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4258.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4402.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4435.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4405.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4402.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4435.default(defaultResult1, defaultResult6));
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