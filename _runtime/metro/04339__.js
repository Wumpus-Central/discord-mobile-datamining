// _runtime/metro/04339__.js
import _mod3918 from "03918__.js";
import differenceInCalendarDays_mod from "../04075_differenceInCalendarDays.js";
import startOfWeekYear_mod from "../04195_startOfWeekYear.js";
import _typeof_mod from "03913__.js";
import module_3917_mod from "03917__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

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
let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj4 = { default: module_3917 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3917;
}
module_3917 = tmp9;
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
  const defaultOptions = _mod3918.getDefaultOptions();
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
  const defaultResult1 = module_3917.default(num);
  const defaultResult3 = module_3917.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult3, 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  const defaultResult5 = startOfWeekYear.default(date, firstWeekContainsDate);
  defaultResult5.setDate(defaultResult5.getDate() + differenceInCalendarDays.default(defaultResult2, startOfWeekYear.default(defaultResult2, firstWeekContainsDate)));
  return defaultResult5;
};
export default exports.default;