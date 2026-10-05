// === Module 4384: setWeekYear ===

// Module 4384 (setWeekYear)
import _mod3963 from "module_3963" /* 3963 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4120 */;
import startOfWeekYear_mod from "startOfWeekYear" /* 4240 */;
import toDate_mod from "toDate" /* 3958 */;
import toInteger_mod from "toInteger" /* 3962 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  tmp3 = { default: differenceInCalendarDays };
  const obj = { default: differenceInCalendarDays };
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
let startOfWeekYear = startOfWeekYear_mod;
if (!startOfWeekYear) {
  tmp5 = { default: startOfWeekYear };
  const obj2 = { default: startOfWeekYear };
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp9 = { default: toInteger };
  const obj4 = { default: toInteger };
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp11 = { default: requiredArgs };
  const obj5 = { default: requiredArgs };
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setWeekYear(arg0, arg1, firstWeekContainsDate) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3963.getDefaultOptions();
  let prop;
  const _default = toInteger.default;
  if (null != firstWeekContainsDate) {
    prop = firstWeekContainsDate.firstWeekContainsDate;
  }
  if (null === prop) {
    let prop1;
    if (null != firstWeekContainsDate) {
      const locale = firstWeekContainsDate.locale;
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
  const _defaultResult = _default(num);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const defaultResult3 = differenceInCalendarDays.default(defaultResult1, startOfWeekYear.default(defaultResult1, firstWeekContainsDate));
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, _defaultResult);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfWeekYear.default(date, firstWeekContainsDate);
  defaultResult4.setDate(defaultResult4.getDate() + defaultResult3);
  return defaultResult4;
};