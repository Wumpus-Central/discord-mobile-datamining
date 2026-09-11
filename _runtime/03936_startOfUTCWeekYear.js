// === Module 3936: startOfUTCWeekYear ===

// Module 3936 (startOfUTCWeekYear)
import _mod3700 from "module_3700" /* 3700 */;
import module_3937 from "module_3937" /* 3937 */;
import requiredArgs from "requiredArgs" /* 3696 */;
import startOfUTCWeek from "startOfUTCWeek" /* 3698 */;
import module_3699 from "module_3699" /* 3699 */;

if (!module_3937) {
  let obj = { default: module_3937 };
  let tmp3 = obj;
} else {
  tmp3 = module_3937;
}
module_3937 = tmp3;
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
if (!module_3699) {
  const obj1 = { default: module_3699 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3699;
}
module_3699 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3700.getDefaultOptions();
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
  const defaultResult1 = module_3699.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_3937.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;