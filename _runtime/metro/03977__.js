// === Module 3977: ? ===

// Module 3977
import _mod3698 from "module_3698" /* 3698 */;
import module_3955 from "module_3955" /* 3955 */;
import module_3956 from "module_3956" /* 3956 */;
import startOfMonth from "startOfMonth" /* 3909 */;
import requiredArgs from "requiredArgs" /* 3694 */;
import module_3697 from "module_3697" /* 3697 */;

if (!module_3955) {
  let obj = { default: module_3955 };
  let tmp3 = obj;
} else {
  tmp3 = module_3955;
}
module_3955 = tmp3;
if (!module_3956) {
  obj = { default: module_3956 };
  let tmp5 = obj;
} else {
  tmp5 = module_3956;
}
module_3956 = tmp5;
if (!startOfMonth) {
  obj = { default: startOfMonth };
  let tmp7 = obj;
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
if (!module_3697) {
  const obj2 = { default: module_3697 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3697;
}
module_3697 = tmp11;

export default function getWeekOfMonth(arg0, weekStartsOn) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3698.getDefaultOptions();
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
  const defaultResult1 = module_3697.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = module_3955.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult2)) {
        return NaN;
      } else {
        const diff = defaultResult1 - module_3956.default(startOfMonth.default(arg0));
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