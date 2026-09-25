// === Module 4341: ? ===

// Module 4341
import _mod3920 from "module_3920" /* 3920 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4077 */;
import startOfWeekYear_mod from "startOfWeekYear" /* 4197 */;
import _typeof_mod from "module_3915" /* 3915 */;
import module_3919_mod from "module_3919" /* 3919 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj = { default: differenceInCalendarDays };
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
let startOfWeekYear = startOfWeekYear_mod;
if (!startOfWeekYear) {
  const obj2 = { default: startOfWeekYear };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj4 = { default: module_3919 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3919;
}
module_3919 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setWeekYear(arg0, arg1, firstWeekContainsDate) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3920.getDefaultOptions();
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
  const defaultResult2 = _typeof.default(arg0);
  const defaultResult1 = module_3919.default(num);
  const defaultResult3 = module_3919.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult3, 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  const defaultResult5 = startOfWeekYear.default(date, firstWeekContainsDate);
  defaultResult5.setDate(defaultResult5.getDate() + differenceInCalendarDays.default(defaultResult2, startOfWeekYear.default(defaultResult2, firstWeekContainsDate)));
  return defaultResult5;
};
export default exports.default;