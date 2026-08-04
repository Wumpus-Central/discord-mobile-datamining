// _runtime/03513_startOfUTCWeekYear.js
import getUTCWeekYear from "getUTCWeekYear";
import requiredArgs from "requiredArgs";
import startOfUTCWeek from "startOfUTCWeek";
import toInteger from "toInteger";

if (!getUTCWeekYear) {
  let obj = { default: null };
  obj[0] = getUTCWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getUTCWeekYear;
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

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  tmp5.default(1, arguments);
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
  const defaultResult1 = tmp9.default(num);
  const date = new Date(0);
  date.setUTCFullYear(tmp3.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return tmp7.default(date, firstWeekContainsDate);
};
export default exports.default;