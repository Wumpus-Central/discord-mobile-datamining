// === Module 4008: ? ===

// Module 4008
import _mod3730 from "module_3730" /* 3730 */;
import startOfWeek from "startOfWeek" /* 3884 */;
import _typeof from "module_3725" /* 3725 */;
import module_3729 from "module_3729" /* 3729 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!startOfWeek) {
  let obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3729) {
  obj = { default: module_3729 };
  let tmp7 = obj;
} else {
  tmp7 = module_3729;
}
module_3729 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const defaultOptions = _mod3730.getDefaultOptions();
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
  const defaultResult2 = module_3729.default(num);
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