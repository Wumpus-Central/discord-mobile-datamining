// === Module 4205: startOfUTCWeekYear ===

// Module 4205 (startOfUTCWeekYear)
import _mod3969 from "module_3969" /* 3969 */;
import module_4206_mod from "module_4206" /* 4206 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import startOfUTCWeek_mod from "startOfUTCWeek" /* 3967 */;
import module_3968_mod from "module_3968" /* 3968 */;

let module_4206 = module_4206_mod;
if (!module_4206) {
  const obj = { default: module_4206 };
  let tmp3 = obj;
} else {
  tmp3 = module_4206;
}
module_4206 = tmp3;
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
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj4 = { default: module_3968 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3968;
}
module_3968 = tmp9;

export default function startOfUTCWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3969.getDefaultOptions();
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
          options = locale.options;
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
  const defaultResult1 = module_3968.default(num);
  const date = new Date(0);
  date.setUTCFullYear(module_4206.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;