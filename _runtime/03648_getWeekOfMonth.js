import { getDefaultOptions } from "03369_getDefaultOptions.js";
// _runtime/03648_getWeekOfMonth.js
import getDate from "getDate";
import getDay from "getDay";
import startOfMonth from "startOfMonth";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

if (!getDate) {
  let obj = { default: null };
  obj[0] = getDate;
  let tmp3 = obj;
} else {
  tmp3 = getDate;
}
let obj1 = tmp3;
if (!getDay) {
  obj = { default: null };
  obj[0] = getDay;
  let tmp5 = obj;
} else {
  tmp5 = getDay;
}
let c3 = tmp5;
if (!startOfMonth) {
  obj = { default: null };
  obj[0] = startOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = startOfMonth;
}
let c4 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c5 = tmp9;
if (!toInteger) {
  const obj2 = { default: null };
  obj2[0] = toInteger;
  let tmp11 = obj2;
} else {
  tmp11 = toInteger;
}
let closure_6 = tmp11;

export default function getWeekOfMonth(arg0, weekStartsOn) {
  tmp9.default(1, arguments);
  const defaultOptions = getDefaultOptions /* getDefaultOptions */.getDefaultOptions();
  weekStartsOn = undefined;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      const locale = weekStartsOn.locale;
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
  const defaultResult1 = tmp11.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = tmp3.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult2)) {
        return NaN;
      } else {
        const diff = defaultResult1 - tmp5.default(tmp7.default(arg0));
        let sum = diff;
        if (diff <= 0) {
          sum = diff + 7;
        }
        const _Math = Math;
        return Math.ceil((defaultResult2 - sum) / 7) + 1;
      }
      tmp11 = globalThis;
      tmp9 = tmp3;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;