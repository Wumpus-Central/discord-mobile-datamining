// _runtime/04242_getWeekOfMonth.js
import _mod3963 from "metro/03963__.js";
import getDate_mod from "04220_getDate.js";
import getDay_mod from "04221_getDay.js";
import startOfMonth_mod from "04174_startOfMonth.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import toInteger_mod from "03962_toInteger.js";

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let getDate = getDate_mod;
if (!getDate) {
  tmp3 = { default: getDate };
  const obj = { default: getDate };
} else {
  tmp3 = getDate;
}
getDate = tmp3;
let getDay = getDay_mod;
if (!getDay) {
  tmp5 = { default: getDay };
  const obj2 = { default: getDay };
} else {
  tmp5 = getDay;
}
getDay = tmp5;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  tmp7 = { default: startOfMonth };
  const obj3 = { default: startOfMonth };
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp11 = { default: toInteger };
  const obj5 = { default: toInteger };
} else {
  tmp11 = toInteger;
}
toInteger = tmp11;

export default function getWeekOfMonth(arg0, weekStartsOn) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3963.getDefaultOptions();
  weekStartsOn = undefined;
  const _default = toInteger.default;
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
  const _defaultResult = _default(num);
  if (_defaultResult >= 0) {
    if (_defaultResult <= 6) {
      const defaultResult1 = getDate.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult1)) {
        return NaN;
      } else {
        const diff = _defaultResult - getDay.default(startOfMonth.default(arg0));
        let sum = diff;
        if (diff <= 0) {
          sum = diff + 7;
        }
        const _Math = Math;
        return Math.ceil((defaultResult1 - sum) / 7) + 1;
      }
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
}
