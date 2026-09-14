// _runtime/metro/04009__.js
import _mod3730 from "03730__.js";
import module_3987_mod from "03987__.js";
import module_3988_mod from "03988__.js";
import startOfMonth_mod from "../03941_startOfMonth.js";
import requiredArgs_mod from "../03726_requiredArgs.js";
import module_3729_mod from "03729__.js";

let module_3987 = module_3987_mod;
if (!module_3987) {
  const obj = { default: module_3987 };
  let tmp3 = obj;
} else {
  tmp3 = module_3987;
}
module_3987 = tmp3;
let module_3988 = module_3988_mod;
if (!module_3988) {
  const obj2 = { default: module_3988 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3988;
}
module_3988 = tmp5;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  const obj3 = { default: startOfMonth };
  let tmp7 = obj3;
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj5 = { default: module_3729 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3729;
}
module_3729 = tmp11;

export default function getWeekOfMonth(arg0, weekStartsOn) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3730.getDefaultOptions();
  weekStartsOn = undefined;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      locale = weekStartsOn.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              weekStartsOn1 = options.weekStartsOn;
            }
          }
        }
      }
    }
    weekStartsOn = weekStartsOn1;
  }
  if (null === weekStartsOn) {
    weekStartsOn = defaultOptions.weekStartsOn;
  }
  if (null === weekStartsOn) {
    const locale2 = defaultOptions.locale;
    let weekStartsOn2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            weekStartsOn2 = options2.weekStartsOn;
          }
        }
      }
    }
    weekStartsOn = weekStartsOn2;
  }
  let num = 0;
  if (null !== weekStartsOn) {
    num = 0;
    if (undefined !== weekStartsOn) {
      num = weekStartsOn;
    }
  }
  const defaultResult1 = module_3729.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = module_3987.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult2)) {
        return NaN;
      } else {
        const diff = defaultResult1 - module_3988.default(startOfMonth.default(arg0));
        let sum = diff;
        if (diff <= 0) {
          sum = diff + 7;
        }
        const _Math = Math;
        return Math.ceil((defaultResult2 - sum) / 7) + 1;
      }
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;