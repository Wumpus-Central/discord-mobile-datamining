// === Module 4763: startOfUTCWeekYear ===

// Module 4763 (startOfUTCWeekYear)
import _mod4527 from "module_4527" /* 4527 */;
import module_4764_mod from "module_4764" /* 4764 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;
import startOfUTCWeek_mod from "startOfUTCWeek" /* 4525 */;
import module_4526_mod from "module_4526" /* 4526 */;

let module_4764 = module_4764_mod;
if (!module_4764) {
  const obj = { default: module_4764 };
  let tmp3 = obj;
} else {
  tmp3 = module_4764;
}
module_4764 = tmp3;
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
let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj4 = { default: module_4526 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4526;
}
module_4526 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod4527.getDefaultOptions();
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
  const defaultResult1 = module_4526.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_4764.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;