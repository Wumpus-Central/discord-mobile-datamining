// === Module 3698: setWeekYear ===

// Module 3698 (setWeekYear)
import differenceInCalendarDays from "differenceInCalendarDays";
import startOfWeekYear from "startOfWeekYear";
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";

if (!differenceInCalendarDays) {
  let obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
let obj1 = tmp3;
if (!startOfWeekYear) {
  obj = { default: null };
  obj[0] = startOfWeekYear;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeekYear;
}
let c3 = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
let c4 = tmp7;
if (!toInteger) {
  obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
} else {
  tmp9 = toInteger;
}
let c5 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
let closure_6 = tmp11;

export default function setWeekYear(arg0, arg1, firstWeekContainsDate) {
  tmp11.default(2, arguments);
  const defaultOptions = require(3277) /* getDefaultOptions */.getDefaultOptions();
  let prop;
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
  const defaultResult2 = tmp7.default(arg0);
  const defaultResult1 = tmp9.default(num);
  const obj = tmp9;
  const defaultResult3 = tmp9.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult3, 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  const defaultResult5 = tmp5.default(date, firstWeekContainsDate);
  defaultResult5.setDate(defaultResult5.getDate() + tmp3.default(defaultResult2, tmp5.default(defaultResult2, firstWeekContainsDate)));
  return defaultResult5;
};
export default exports.default;