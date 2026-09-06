// _runtime/03848_differenceInMonths.js
import _typeof from "metro/03650__.js";
import differenceInCalendarMonths from "03836_differenceInCalendarMonths.js";
import compareAsc from "03826_compareAsc.js";
import requiredArgs from "03651_requiredArgs.js";
import 03849__ from "metro/03849__.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!differenceInCalendarMonths) {
  obj = { default: differenceInCalendarMonths };
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarMonths;
}
differenceInCalendarMonths = tmp5;
if (!compareAsc) {
  obj = { default: compareAsc };
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
if (!module_3849) {
  const obj2 = { default: module_3849 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3849;
}
module_3849 = tmp11;

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
    tmp11 = module_3849.default(_typeof.default(date)) && 1 === absolute && 1 === compareAsc.default(date, defaultResult2);
  }
  let num4 = 0;
  if (0 !== num) {
    num4 = num;
  }
  return num4;
};
export default exports.default;