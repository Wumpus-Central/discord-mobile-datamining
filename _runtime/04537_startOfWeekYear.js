// === Module 4537: startOfWeekYear ===

// Module 4537 (startOfWeekYear)
import _mod4260 from "module_4260" /* 4260 */;
import module_4538_mod from "module_4538" /* 4538 */;
import startOfWeek_mod from "startOfWeek" /* 4414 */;
import module_4259_mod from "module_4259" /* 4259 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4538 = module_4538_mod;
if (!module_4538) {
  const obj = { default: module_4538 };
  let tmp3 = obj;
} else {
  tmp3 = module_4538;
}
module_4538 = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj2 = { default: startOfWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj3 = { default: module_4259 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4259;
}
module_4259 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function startOfWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod4260.getDefaultOptions();
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
  const defaultResult1 = module_4259.default(num);
  const date = new Date(0);
  date.setFullYear(module_4538.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;