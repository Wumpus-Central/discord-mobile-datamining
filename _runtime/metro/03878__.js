// === Module 3878: ? ===

// Module 3878
import module_3879_mod from "module_3879" /* 3879 */;
import _typeof_mod from "module_3728" /* 3728 */;
import module_3732_mod from "module_3732" /* 3732 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;
import module_3880_mod from "module_3880" /* 3880 */;
import module_3881_mod from "module_3881" /* 3881 */;

let module_3879 = module_3879_mod;
if (!module_3879) {
  const obj = { default: module_3879 };
  let tmp3 = obj;
} else {
  tmp3 = module_3879;
}
module_3879 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj3 = { default: module_3732 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3732;
}
module_3732 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_3880 = module_3880_mod;
if (!module_3880) {
  const obj5 = { default: module_3880 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3880;
}
module_3880 = tmp11;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj6 = { default: module_3881 };
  let tmp13 = obj6;
} else {
  tmp13 = module_3881;
}
module_3881 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_3879;
  let defaultResult2 = module_3879.default(defaultResult1);
  const defaultResult3 = module_3732.default(arg1);
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
    defaultResult1.setDate(defaultResult1.getDate() + 7 * module_3732.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        diff = absolute;
        if (!module_3879.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = module_3879;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_3881.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_3880.default(defaultResult1)) {
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