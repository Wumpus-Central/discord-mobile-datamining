// === Module 4089: ? ===

// Module 4089
import _mod3668 from "module_3668" /* 3668 */;
import differenceInCalendarDays from "differenceInCalendarDays" /* 3825 */;
import startOfWeekYear from "startOfWeekYear" /* 3945 */;
import _typeof from "module_3663" /* 3663 */;
import module_3667 from "module_3667" /* 3667 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!differenceInCalendarDays) {
  let obj = { default: differenceInCalendarDays };
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
if (!startOfWeekYear) {
  obj = { default: startOfWeekYear };
  let tmp5 = obj;
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!module_3667) {
  const obj1 = { default: module_3667 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3667;
}
module_3667 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setWeekYear(arg0, arg1, firstWeekContainsDate) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3668.getDefaultOptions();
  let prop;
  if (null != firstWeekContainsDate) {
    prop = firstWeekContainsDate.firstWeekContainsDate;
  }
  if (null === prop) {
    let prop1;
    if (null != firstWeekContainsDate) {
      locale = firstWeekContainsDate.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              prop1 = options.firstWeekContainsDate;
            }
          }
        }
      }
    }
    prop = prop1;
  }
  if (null === prop) {
    prop = defaultOptions.firstWeekContainsDate;
  }
  if (null === prop) {
    const locale2 = defaultOptions.locale;
    let prop2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            prop2 = options2.firstWeekContainsDate;
          }
        }
      }
    }
    prop = prop2;
  }
  let num = 1;
  if (null !== prop) {
    num = 1;
    if (undefined !== prop) {
      num = prop;
    }
  }
  const defaultResult2 = _typeof.default(arg0);
  const defaultResult1 = module_3667.default(num);
  const defaultResult3 = module_3667.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult3, 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  const defaultResult5 = startOfWeekYear.default(date, firstWeekContainsDate);
  defaultResult5.setDate(defaultResult5.getDate() + differenceInCalendarDays.default(defaultResult2, startOfWeekYear.default(defaultResult2, firstWeekContainsDate)));
  return defaultResult5;
};
export default exports.default;