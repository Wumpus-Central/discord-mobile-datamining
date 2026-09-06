// === Module 3898: ? ===

// Module 3898
import _mod3655 from "module_3655" /* 3655 */;
import compareAsc from "compareAsc" /* 3826 */;
import differenceInMonths from "differenceInMonths" /* 3848 */;
import differenceInSeconds from "differenceInSeconds" /* 3853 */;
import code from "module_3896" /* 3896 */;
import _typeof from "module_3650" /* 3650 */;
import cloneObject from "cloneObject" /* 3899 */;
import assign from "assign" /* 3900 */;
import module_3813 from "module_3813" /* 3813 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!compareAsc) {
  let obj = { default: compareAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
compareAsc = tmp3;
if (!differenceInMonths) {
  obj = { default: differenceInMonths };
  let tmp5 = obj;
} else {
  tmp5 = differenceInMonths;
}
differenceInMonths = tmp5;
if (!differenceInSeconds) {
  obj = { default: differenceInSeconds };
  let tmp7 = obj;
} else {
  tmp7 = differenceInSeconds;
}
differenceInSeconds = tmp7;
if (!code) {
  const obj1 = { default: code };
  let tmp9 = obj1;
} else {
  tmp9 = code;
}
code = tmp9;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp11 = obj2;
} else {
  tmp11 = _typeof;
}
_typeof = tmp11;
if (!cloneObject) {
  const obj3 = { default: cloneObject };
  let tmp13 = obj3;
} else {
  tmp13 = cloneObject;
}
cloneObject = tmp13;
if (!assign) {
  const obj4 = { default: assign };
  let tmp15 = obj4;
} else {
  tmp15 = assign;
}
assign = tmp15;
if (!module_3813) {
  const obj5 = { default: module_3813 };
  let tmp17 = obj5;
} else {
  tmp17 = module_3813;
}
module_3813 = tmp17;
if (!requiredArgs) {
  const obj6 = { default: requiredArgs };
  let tmp19 = obj6;
} else {
  tmp19 = requiredArgs;
}
requiredArgs = tmp19;
let c11 = 1440;
let c12 = 2520;
let c13 = 43200;
let c14 = 86400;

export default function formatDistance(arg0, arg1, locale) {
  requiredArgs.default(2, arguments);
  locale = undefined;
  const defaultOptions = _mod3655.getDefaultOptions();
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = code.default;
  }
  if (locale.formatDistance) {
    const defaultResult1 = compareAsc.default(arg0, arg1);
    const _isNaN = isNaN;
    if (isNaN(defaultResult1)) {
      const _RangeError2 = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    } else {
      let addSuffix;
      if (null != locale) {
        addSuffix = locale.addSuffix;
      }
      const obj = { addSuffix: Boolean(addSuffix), comparison: defaultResult1 };
      const defaultResult3 = assign.default(cloneObject.default(locale), obj);
      if (defaultResult1 > 0) {
        let defaultResult4 = _typeof.default(arg1);
        let defaultResult5 = _typeof.default(arg0);
      } else {
        defaultResult4 = _typeof.default(arg0);
        defaultResult5 = _typeof.default(arg1);
      }
      const defaultResult6 = differenceInSeconds.default(defaultResult5, defaultResult4);
      const defaultResult2 = cloneObject.default(locale);
      const _Math = Math;
      const rounded = Math.round((defaultResult6 - (module_3813.default(defaultResult5) - module_3813.default(defaultResult4)) / 1000) / 60);
      if (rounded < 2) {
        if (null != locale) {
          if (locale.includeSeconds) {
            if (defaultResult6 < 5) {
              let formatDistanceResult = locale.formatDistance("lessThanXSeconds", 5, defaultResult3);
            } else if (defaultResult6 < 10) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 10, defaultResult3);
            } else if (defaultResult6 < 20) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 20, defaultResult3);
            } else if (defaultResult6 < 40) {
              formatDistanceResult = locale.formatDistance("halfAMinute", 0, defaultResult3);
            } else if (defaultResult6 < 60) {
              formatDistanceResult = locale.formatDistance("lessThanXMinutes", 1, defaultResult3);
            } else {
              formatDistanceResult = locale.formatDistance("xMinutes", 1, defaultResult3);
            }
          }
        }
        if (0 === rounded) {
          let formatDistanceResult1 = locale.formatDistance("lessThanXMinutes", 1, defaultResult3);
        } else {
          formatDistanceResult1 = locale.formatDistance("xMinutes", rounded, defaultResult3);
        }
        return formatDistanceResult1;
      } else if (rounded < 45) {
        return locale.formatDistance("xMinutes", rounded, defaultResult3);
      } else if (rounded < 90) {
        return locale.formatDistance("aboutXHours", 1, defaultResult3);
      } else if (rounded < c11) {
        const _Math6 = Math;
        return locale.formatDistance("aboutXHours", Math.round(rounded / 60), defaultResult3);
      } else if (rounded < c12) {
        return locale.formatDistance("xDays", 1, defaultResult3);
      } else if (rounded < c13) {
        const _Math5 = Math;
        return locale.formatDistance("xDays", Math.round(rounded / tmp37), defaultResult3);
      } else if (rounded < c14) {
        const _Math4 = Math;
        return locale.formatDistance("aboutXMonths", Math.round(rounded / tmp39), defaultResult3);
      } else {
        const defaultResult8 = differenceInMonths.default(defaultResult5, defaultResult4);
        if (defaultResult8 < 12) {
          const _Math3 = Math;
          return locale.formatDistance("xMonths", Math.round(rounded / tmp39), defaultResult3);
        } else {
          const result = defaultResult8 % 12;
          const _Math2 = Math;
          const rounded1 = Math.floor(defaultResult8 / 12);
          if (result < 3) {
            let formatDistanceResult2 = locale.formatDistance("aboutXYears", rounded1, defaultResult3);
          } else if (result < 9) {
            formatDistanceResult2 = locale.formatDistance("overXYears", rounded1, defaultResult3);
          } else {
            formatDistanceResult2 = locale.formatDistance("almostXYears", rounded1 + 1, defaultResult3);
          }
          return formatDistanceResult2;
        }
      }
      const defaultResult7 = module_3813.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("locale must contain formatDistance property");
    throw rangeError1;
  }
};
export default exports.default;