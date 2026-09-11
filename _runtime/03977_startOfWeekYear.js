// === Module 3977: startOfWeekYear ===

// Module 3977 (startOfWeekYear)
import _mod3700 from "module_3700" /* 3700 */;
import module_3978 from "module_3978" /* 3978 */;
import startOfWeek from "startOfWeek" /* 3854 */;
import module_3699 from "module_3699" /* 3699 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3978) {
  let obj = { default: module_3978 };
  let tmp3 = obj;
} else {
  tmp3 = module_3978;
}
module_3978 = tmp3;
if (!startOfWeek) {
  obj = { default: startOfWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
if (!module_3699) {
  obj = { default: module_3699 };
  let tmp7 = obj;
} else {
  tmp7 = module_3699;
}
module_3699 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function startOfWeekYear(arg0, firstWeekContainsDate) {
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
  date.setFullYear(module_3978.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;