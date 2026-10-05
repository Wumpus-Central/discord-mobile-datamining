// === Module 4241: getWeekYear ===

// Module 4241 (getWeekYear)
import _mod3963 from "module_3963" /* 3963 */;
import startOfWeek_mod from "startOfWeek" /* 4117 */;
import toDate_mod from "toDate" /* 3958 */;
import toInteger_mod from "toInteger" /* 3962 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  tmp3 = { default: startOfWeek };
  const obj = { default: startOfWeek };
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const fullYear = defaultResult1.getFullYear();
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
  if (_defaultResult >= 1) {
    if (_defaultResult <= 7) {
      let sum;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(0);
      date.setFullYear(fullYear + 1, 0, _defaultResult);
      date.setHours(0, 0, 0, 0);
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const defaultResult2 = startOfWeek.default(date, firstWeekContainsDate);
      const date1 = new Date(0);
      date1.setFullYear(fullYear, 0, _defaultResult);
      date1.setHours(0, 0, 0, 0);
      const defaultResult3 = startOfWeek.default(date1, firstWeekContainsDate);
      const time = defaultResult1.getTime();
      if (time >= defaultResult2.getTime()) {
        sum = fullYear + 1;
      } else {
        const time1 = defaultResult1.getTime();
        sum = fullYear;
        if (time1 < defaultResult3.getTime()) {
          sum = fullYear - 1;
        }
      }
      return sum;
    }
  }
  const rangeError = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError;
};