// === Module 4201: ? ===

// Module 4201
import _mod3923 from "module_3923" /* 3923 */;
import startOfWeek_mod from "startOfWeek" /* 4077 */;
import _typeof_mod from "module_3918" /* 3918 */;
import module_3922_mod from "module_3922" /* 3922 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj3 = { default: module_3922 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3922;
}
module_3922 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const defaultOptions = _mod3923.getDefaultOptions();
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
  const defaultResult2 = module_3922.default(num);
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