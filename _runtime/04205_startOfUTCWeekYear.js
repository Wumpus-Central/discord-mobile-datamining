// === Module 4205: startOfUTCWeekYear ===

// Module 4205 (startOfUTCWeekYear)
import _mod3969 from "module_3969" /* 3969 */;
import getUTCWeekYear_mod from "getUTCWeekYear" /* 4206 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import startOfUTCWeek_mod from "startOfUTCWeek" /* 3967 */;
import toInteger_mod from "toInteger" /* 3968 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let getUTCWeekYear = getUTCWeekYear_mod;
if (!getUTCWeekYear) {
  tmp3 = { default: getUTCWeekYear };
  const obj = { default: getUTCWeekYear };
} else {
  tmp3 = getUTCWeekYear;
}
getUTCWeekYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  tmp7 = { default: startOfUTCWeek };
  const obj3 = { default: startOfUTCWeek };
} else {
  tmp7 = startOfUTCWeek;
}
startOfUTCWeek = tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp9 = { default: toInteger };
  const obj4 = { default: toInteger };
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3969.getDefaultOptions();
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
  const defaultResult1 = getUTCWeekYear.default(arg0, firstWeekContainsDate);
  const date = new Date(0);
  date.setUTCFullYear(defaultResult1, 0, _defaultResult);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};