// === Module 3892: ? ===

// Module 3892
import _mod3655 from "module_3655" /* 3655 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;
import startOfUTCWeek from "startOfUTCWeek" /* 3653 */;
import module_3654 from "module_3654" /* 3654 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!startOfUTCWeek) {
  obj = { default: startOfUTCWeek };
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCWeek;
}
startOfUTCWeek = tmp7;
if (!module_3654) {
  const obj1 = { default: module_3654 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3654;
}
module_3654 = tmp9;

export default function getUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const uTCFullYear = defaultResult1.getUTCFullYear();
  const defaultOptions = _mod3655.getDefaultOptions();
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
  const defaultResult2 = module_3654.default(num);
  if (defaultResult2 >= 1) {
    if (defaultResult2 <= 7) {
      const _Date = Date;
      const date = new Date(0);
      date.setUTCFullYear(uTCFullYear + 1, 0, defaultResult2);
      date.setUTCHours(0, 0, 0, 0);
      const _Date2 = Date;
      const date1 = new Date(0);
      date1.setUTCFullYear(uTCFullYear, 0, defaultResult2);
      date1.setUTCHours(0, 0, 0, 0);
      const defaultResult3 = startOfUTCWeek.default(date, firstWeekContainsDate);
      const time = defaultResult1.getTime();
      if (time >= defaultResult3.getTime()) {
        let sum = uTCFullYear + 1;
      } else {
        const time1 = defaultResult1.getTime();
        sum = uTCFullYear;
        if (time1 < defaultResult4.getTime()) {
          sum = uTCFullYear - 1;
        }
      }
      return sum;
    }
  }
  const rangeError = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError;
};
export default exports.default;