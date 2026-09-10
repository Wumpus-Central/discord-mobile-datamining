// === Module 3934: startOfUTCWeekYear ===

// Module 3934 (startOfUTCWeekYear)
import _mod3698 from "module_3698" /* 3698 */;
import module_3935 from "module_3935" /* 3935 */;
import requiredArgs from "requiredArgs" /* 3694 */;
import startOfUTCWeek from "startOfUTCWeek" /* 3696 */;
import module_3697 from "module_3697" /* 3697 */;

if (!module_3935) {
  let obj = { default: module_3935 };
  let tmp3 = obj;
} else {
  tmp3 = module_3935;
}
module_3935 = tmp3;
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
if (!module_3697) {
  const obj1 = { default: module_3697 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3697;
}
module_3697 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3698.getDefaultOptions();
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
  const defaultResult1 = module_3697.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_3935.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;