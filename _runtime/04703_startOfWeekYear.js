// === Module 4703: startOfWeekYear ===

// Module 4703 (startOfWeekYear)
import _mod4426 from "module_4426" /* 4426 */;
import module_4704_mod from "module_4704" /* 4704 */;
import startOfWeek_mod from "startOfWeek" /* 4580 */;
import module_4425_mod from "module_4425" /* 4425 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4704 = module_4704_mod;
if (!module_4704) {
  const obj = { default: module_4704 };
  let tmp3 = obj;
} else {
  tmp3 = module_4704;
}
module_4704 = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj2 = { default: startOfWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj3 = { default: module_4425 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4425;
}
module_4425 = tmp7;
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
  date.setFullYear(module_4704.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;