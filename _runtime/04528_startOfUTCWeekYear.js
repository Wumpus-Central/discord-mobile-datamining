// === Module 4528: startOfUTCWeekYear ===

// Module 4528 (startOfUTCWeekYear)
import _mod4292 from "module_4292" /* 4292 */;
import module_4529_mod from "module_4529" /* 4529 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;
import startOfUTCWeek_mod from "startOfUTCWeek" /* 4290 */;
import module_4291_mod from "module_4291" /* 4291 */;

let module_4529 = module_4529_mod;
if (!module_4529) {
  const obj = { default: module_4529 };
  let tmp3 = obj;
} else {
  tmp3 = module_4529;
}
module_4529 = tmp3;
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
let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj4 = { default: module_4291 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4291;
}
module_4291 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod4292.getDefaultOptions();
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
  const defaultResult1 = module_4291.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_4529.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;