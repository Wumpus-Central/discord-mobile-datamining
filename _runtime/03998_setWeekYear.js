// _runtime/03998_setWeekYear.js
import getDefaultOptions from "03577_getDefaultOptions.js";
import differenceInCalendarDays from "03734_differenceInCalendarDays.js";
import startOfWeekYear from "03854_startOfWeekYear.js";
import _typeof from "metro/03572__typeof.js";
import toInteger from "03576_toInteger.js";
import requiredArgs from "03573_requiredArgs.js";

if (!differenceInCalendarDays) {
  let obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
if (!startOfWeekYear) {
  obj = { default: null };
  obj[0] = startOfWeekYear;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!toInteger) {
  const obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setWeekYear(arg0, arg1, firstWeekContainsDate) {
  requiredArgs.default(2, arguments);
  const defaultOptions = getDefaultOptions.getDefaultOptions();
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
  const defaultResult2 = _typeof.default(arg0);
  const defaultResult1 = toInteger.default(num);
  const obj = toInteger;
  const defaultResult3 = toInteger.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult3, 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  const defaultResult5 = startOfWeekYear.default(date, firstWeekContainsDate);
  defaultResult5.setDate(defaultResult5.getDate() + differenceInCalendarDays.default(defaultResult2, startOfWeekYear.default(defaultResult2, firstWeekContainsDate)));
  return defaultResult5;
};
export default exports.default;