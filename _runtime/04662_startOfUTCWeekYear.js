// === Module 4662: startOfUTCWeekYear ===

// Module 4662 (startOfUTCWeekYear)
import _mod4426 from "module_4426" /* 4426 */;
import module_4663_mod from "module_4663" /* 4663 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;
import startOfUTCWeek_mod from "startOfUTCWeek" /* 4424 */;
import module_4425_mod from "module_4425" /* 4425 */;

let module_4663 = module_4663_mod;
if (!module_4663) {
  const obj = { default: module_4663 };
  let tmp3 = obj;
} else {
  tmp3 = module_4663;
}
module_4663 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  const obj3 = { default: startOfUTCWeek };
  let tmp7 = obj3;
} else {
  tmp7 = startOfUTCWeek;
}
startOfUTCWeek = tmp7;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj4 = { default: module_4425 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4425;
}
module_4425 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod4426.getDefaultOptions();
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
  const defaultResult1 = module_4425.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_4663.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;