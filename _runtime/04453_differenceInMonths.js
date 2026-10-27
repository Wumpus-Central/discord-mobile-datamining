// === Module 4453: differenceInMonths ===

// Module 4453 (differenceInMonths)
import _typeof_mod from "module_4255" /* 4255 */;
import differenceInCalendarMonths_mod from "differenceInCalendarMonths" /* 4441 */;
import compareAsc_mod from "compareAsc" /* 4431 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import module_4454_mod from "module_4454" /* 4454 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let differenceInCalendarMonths = differenceInCalendarMonths_mod;
if (!differenceInCalendarMonths) {
  const obj2 = { default: differenceInCalendarMonths };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarMonths;
}
differenceInCalendarMonths = tmp5;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  const obj3 = { default: compareAsc };
  let tmp7 = obj3;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj5 = { default: module_4454 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4454;
}
module_4454 = tmp11;

export default function differenceInMonths(date, friendsSince) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(date);
  const defaultResult2 = _typeof.default(friendsSince);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarMonths.default(defaultResult1, defaultResult2));
  let num = 0;
  if (absolute >= 1) {
    let tmp5 = 1 === defaultResult1.getMonth();
    if (tmp5) {
      tmp5 = defaultResult1.getDate() > 27;
    }
    if (tmp5) {
      defaultResult1.setDate(30);
    }
    defaultResult1.setMonth(defaultResult1.getMonth() - defaultResult3 * absolute);
    const defaultResult4 = compareAsc.default(defaultResult1, defaultResult2);
    const tmp9 = -defaultResult3;
    let flag = defaultResult4 === tmp9;
    if (tmp11) {
      flag = false;
    }
    const _Number = Number;
    num = defaultResult3 * (absolute - Number(flag));
    tmp11 = module_4454.default(_typeof.default(date)) && 1 === absolute && 1 === compareAsc.default(date, defaultResult2);
  }
  let num4 = 0;
  if (0 !== num) {
    num4 = num;
  }
  return num4;
};
export default exports.default;