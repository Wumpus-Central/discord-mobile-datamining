// _runtime/03622_getUTCWeekYear.js
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import startOfUTCWeek from "startOfUTCWeek";
import toInteger from "toInteger";
import { getDefaultOptions } from "03385_getDefaultOptions.js";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let obj1 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;
if (!startOfUTCWeek) {
  obj = { default: null };
  obj[0] = startOfUTCWeek;
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCWeek;
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

export default function getUTCWeekYear(arg0, firstWeekContainsDate) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const uTCFullYear = defaultResult1.getUTCFullYear();
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
  const defaultResult2 = tmp9.default(num);
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
      const defaultResult3 = tmp7.default(date, firstWeekContainsDate);
      tmp9 = globalThis;
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