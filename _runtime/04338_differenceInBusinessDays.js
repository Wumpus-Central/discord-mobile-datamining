// === Module 4338: differenceInBusinessDays ===

// Module 4338 (differenceInBusinessDays)
import module_4306_mod from "module_4306" /* 4306 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4320 */;
import module_4339_mod from "module_4339" /* 4339 */;
import module_4340_mod from "module_4340" /* 4340 */;
import module_4309_mod from "module_4309" /* 4309 */;
import _typeof_mod from "module_4158" /* 4158 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;
import module_4162_mod from "module_4162" /* 4162 */;

let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj = { default: module_4306 };
  let tmp3 = obj;
} else {
  tmp3 = module_4306;
}
module_4306 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4339 = module_4339_mod;
if (!module_4339) {
  const obj3 = { default: module_4339 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4339;
}
module_4339 = tmp7;
let module_4340 = module_4340_mod;
if (!module_4340) {
  const obj4 = { default: module_4340 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4340;
}
module_4340 = tmp9;
let module_4309 = module_4309_mod;
if (!module_4309) {
  const obj5 = { default: module_4309 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4309;
}
module_4309 = tmp11;
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
let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj8 = { default: module_4162 };
  let tmp17 = obj8;
} else {
  tmp17 = module_4162;
}
module_4162 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4340.default(defaultResult1)) {
    if (module_4340.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_4162.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4306.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4339.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4309.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4306.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4339.default(defaultResult1, defaultResult6));
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