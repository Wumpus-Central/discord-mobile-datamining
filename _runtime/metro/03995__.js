// === Module 3995: ? ===

// Module 3995
import module_3996_mod from "module_3996" /* 3996 */;
import _typeof_mod from "module_3845" /* 3845 */;
import module_3849_mod from "module_3849" /* 3849 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;
import module_3997_mod from "module_3997" /* 3997 */;
import module_3998_mod from "module_3998" /* 3998 */;

let module_3996 = module_3996_mod;
if (!module_3996) {
  const obj = { default: module_3996 };
  let tmp3 = obj;
} else {
  tmp3 = module_3996;
}
module_3996 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj3 = { default: module_3849 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3849;
}
module_3849 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj5 = { default: module_3997 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3997;
}
module_3997 = tmp11;
let module_3998 = module_3998_mod;
if (!module_3998) {
  const obj6 = { default: module_3998 };
  let tmp13 = obj6;
} else {
  tmp13 = module_3998;
}
module_3998 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_3996;
  let defaultResult2 = module_3996.default(defaultResult1);
  const defaultResult3 = module_3849.default(arg1);
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
    defaultResult1.setDate(defaultResult1.getDate() + 7 * module_3849.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        diff = absolute;
        if (!module_3996.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = module_3996;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_3998.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_3997.default(defaultResult1)) {
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