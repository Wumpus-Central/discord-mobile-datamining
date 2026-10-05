// _runtime/04240_startOfWeekYear.js
import _mod3963 from "metro/03963__.js";
import getWeekYear_mod from "04241_getWeekYear.js";
import startOfWeek_mod from "04117_startOfWeek.js";
import toInteger_mod from "03962_toInteger.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let getWeekYear = getWeekYear_mod;
if (!getWeekYear) {
  tmp3 = { default: getWeekYear };
  const obj = { default: getWeekYear };
} else {
  tmp3 = getWeekYear;
}
getWeekYear = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  tmp5 = { default: startOfWeek };
  const obj2 = { default: startOfWeek };
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
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

export default function startOfWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
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
  const defaultResult1 = getWeekYear.default(arg0, firstWeekContainsDate);
  const date = new Date(0);
  date.setFullYear(defaultResult1, 0, _defaultResult);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
}
