// === Module 3966: startOfUTCWeekYear ===

// Module 3966 (startOfUTCWeekYear)
import _mod3730 from "module_3730" /* 3730 */;
import module_3967 from "module_3967" /* 3967 */;
import requiredArgs from "requiredArgs" /* 3726 */;
import startOfUTCWeek from "startOfUTCWeek" /* 3728 */;
import module_3729 from "module_3729" /* 3729 */;

if (!module_3967) {
  let obj = { default: module_3967 };
  let tmp3 = obj;
} else {
  tmp3 = module_3967;
}
module_3967 = tmp3;
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
if (!module_3729) {
  const obj1 = { default: module_3729 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3729;
}
module_3729 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
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
  const defaultResult1 = module_3729.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_3967.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;