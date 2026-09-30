// _runtime/04230_startOfWeekYear.js
import _mod3953 from "metro/03953__.js";
import module_4231_mod from "metro/04231__.js";
import startOfWeek_mod from "04107_startOfWeek.js";
import module_3952_mod from "metro/03952__.js";
import requiredArgs_mod from "03949_requiredArgs.js";

let module_4231 = module_4231_mod;
if (!module_4231) {
  const obj = { default: module_4231 };
  let tmp3 = obj;
} else {
  tmp3 = module_4231;
}
module_4231 = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj2 = { default: startOfWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj3 = { default: module_3952 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3952;
}
module_3952 = tmp7;
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
  const defaultOptions = _mod3953.getDefaultOptions();
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
  const defaultResult1 = module_3952.default(num);
  const date = new Date(0);
  date.setFullYear(module_4231.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;