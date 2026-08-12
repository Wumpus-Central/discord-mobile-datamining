// _runtime/03722_startOfWeekYear.js
import getWeekYear from "getWeekYear";
import startOfWeek from "startOfWeek";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import { getDefaultOptions } from "03445_getDefaultOptions.js";

if (!getWeekYear) {
  let obj = { default: null };
  obj[0] = getWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getWeekYear;
}
let obj1 = tmp3;
if (!startOfWeek) {
  obj = { default: null };
  obj[0] = startOfWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeek;
}
let c3 = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
let c4 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c5 = tmp9;

export default function startOfWeekYear(arg0, firstWeekContainsDate) {
  tmp9.default(1, arguments);
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
  const defaultResult1 = tmp7.default(num);
  const date = new Date(0);
  date.setFullYear(tmp3.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return tmp5.default(date, firstWeekContainsDate);
};
export default exports.default;