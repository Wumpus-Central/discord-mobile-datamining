// === Module 4068: ? ===

// Module 4068
import module_4069_mod from "module_4069" /* 4069 */;
import _typeof_mod from "module_3918" /* 3918 */;
import module_3922_mod from "module_3922" /* 3922 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;
import module_4070_mod from "module_4070" /* 4070 */;
import module_4071_mod from "module_4071" /* 4071 */;

let module_4069 = module_4069_mod;
if (!module_4069) {
  const obj = { default: module_4069 };
  let tmp3 = obj;
} else {
  tmp3 = module_4069;
}
module_4069 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj3 = { default: module_3922 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3922;
}
module_3922 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj5 = { default: module_4070 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4070;
}
module_4070 = tmp11;
let module_4071 = module_4071_mod;
if (!module_4071) {
  const obj6 = { default: module_4071 };
  let tmp13 = obj6;
} else {
  tmp13 = module_4071;
}
module_4071 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_4069;
  let defaultResult2 = module_4069.default(defaultResult1);
  const defaultResult3 = module_3922.default(arg1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * module_3922.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        diff = absolute;
        if (!module_4069.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = module_4069;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_4071.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_4070.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
};
export default exports.default;