// _runtime/03754_startOfWeekYear.js
import getDefaultOptions from "03477_getDefaultOptions.js";
import getWeekYear from "03755_getWeekYear.js";
import startOfWeek from "03631_startOfWeek.js";
import toInteger from "03476_toInteger.js";
import requiredArgs from "03473_requiredArgs.js";

if (!getWeekYear) {
  let obj = { default: null };
  obj[0] = getWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getWeekYear;
}
getWeekYear = tmp3;
if (!startOfWeek) {
  obj = { default: null };
  obj[0] = startOfWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
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

export default function startOfWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
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
  const defaultResult1 = toInteger.default(num);
  const date = new Date(0);
  date.setFullYear(getWeekYear.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;