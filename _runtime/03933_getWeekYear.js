// === Module 3933: getWeekYear ===

// Module 3933 (getWeekYear)
import getDefaultOptions from "getDefaultOptions" /* 3655 */;
import startOfWeek from "startOfWeek" /* 3809 */;
import _typeof from "_typeof" /* 3650 */;
import toInteger from "toInteger" /* 3654 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const fullYear = defaultResult1.getFullYear();
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
  const defaultResult2 = toInteger.default(num);
  if (defaultResult2 >= 1) {
    if (defaultResult2 <= 7) {
      const _Date = Date;
      const date = new Date(0);
      date.setFullYear(fullYear + 1, 0, defaultResult2);
      date.setHours(0, 0, 0, 0);
      const _Date2 = Date;
      const date1 = new Date(0);
      date1.setFullYear(fullYear, 0, defaultResult2);
      date1.setHours(0, 0, 0, 0);
      const defaultResult3 = startOfWeek.default(date, firstWeekContainsDate);
      const time = defaultResult1.getTime();
      if (time >= defaultResult3.getTime()) {
        let sum = fullYear + 1;
      } else {
        const time1 = defaultResult1.getTime();
        sum = fullYear;
        if (time1 < defaultResult4.getTime()) {
          sum = fullYear - 1;
        }
      }
      return sum;
    }
  }
  const rangeError = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError;
};
export default exports.default;