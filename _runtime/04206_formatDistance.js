// === Module 4206: formatDistance ===

// Module 4206 (formatDistance)
import _mod3963 from "module_3963" /* 3963 */;
import compareAsc_mod from "compareAsc" /* 4134 */;
import differenceInMonths_mod from "differenceInMonths" /* 4156 */;
import differenceInSeconds_mod from "differenceInSeconds" /* 4161 */;
import code_mod from "module_4204" /* 4204 */;
import toDate_mod from "toDate" /* 3958 */;
import cloneObject_mod from "cloneObject" /* 4207 */;
import assign_mod from "assign" /* 4208 */;
import getTimezoneOffsetInMilliseconds_mod from "getTimezoneOffsetInMilliseconds" /* 4121 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp19;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  let obj = { default: compareAsc };
  tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
compareAsc = tmp3;
let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  tmp5 = { default: differenceInMonths };
  const obj2 = { default: differenceInMonths };
} else {
  tmp5 = differenceInMonths;
}
differenceInMonths = tmp5;
let differenceInSeconds = differenceInSeconds_mod;
if (!differenceInSeconds) {
  tmp7 = { default: differenceInSeconds };
  const obj3 = { default: differenceInSeconds };
} else {
  tmp7 = differenceInSeconds;
}
differenceInSeconds = tmp7;
let code = code_mod;
if (!code) {
  tmp9 = { default: code };
  const obj4 = { default: code };
} else {
  tmp9 = code;
}
code = tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp11 = { default: toDate };
  const obj5 = { default: toDate };
} else {
  tmp11 = toDate;
}
toDate = tmp11;
let cloneObject = cloneObject_mod;
if (!cloneObject) {
  tmp13 = { default: cloneObject };
  const obj6 = { default: cloneObject };
} else {
  tmp13 = cloneObject;
}
cloneObject = tmp13;
let assign = assign_mod;
if (!assign) {
  tmp15 = { default: assign };
  const obj7 = { default: assign };
} else {
  tmp15 = assign;
}
assign = tmp15;
let getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds_mod;
if (!getTimezoneOffsetInMilliseconds) {
  tmp17 = { default: getTimezoneOffsetInMilliseconds };
  const obj8 = { default: getTimezoneOffsetInMilliseconds };
} else {
  tmp17 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp17;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp19 = { default: requiredArgs };
  const obj9 = { default: requiredArgs };
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
  const defaultOptions = _mod3963.getDefaultOptions();
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
      const self3 = this;
      const self4 = this;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    } else {
      let defaultResult3;
      let defaultResult4;
      let addSuffix;
      const _Boolean = Boolean;
      const _default = assign.default;
      const defaultResult2 = cloneObject.default(locale);
      if (null != locale) {
        addSuffix = locale.addSuffix;
      }
      const obj = { addSuffix: _Boolean(addSuffix), comparison: defaultResult1 };
      const _defaultResult = _default(defaultResult2, obj);
      if (defaultResult1 > 0) {
        defaultResult3 = toDate.default(arg1);
        defaultResult4 = toDate.default(arg0);
      } else {
        defaultResult3 = toDate.default(arg0);
        defaultResult4 = toDate.default(arg1);
      }
      const defaultResult5 = differenceInSeconds.default(defaultResult4, defaultResult3);
      const _Math = Math;
      const defaultResult6 = getTimezoneOffsetInMilliseconds.default(defaultResult4);
      const rounded = Math.round((defaultResult5 - (defaultResult6 - getTimezoneOffsetInMilliseconds.default(defaultResult3)) / 1000) / 60);
      if (rounded < 2) {
        let formatDistanceResult1;
        if (null != locale) {
          if (locale.includeSeconds) {
            let formatDistanceResult;
            if (defaultResult5 < 5) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 5, _defaultResult);
            } else if (defaultResult5 < 10) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 10, _defaultResult);
            } else if (defaultResult5 < 20) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 20, _defaultResult);
            } else if (defaultResult5 < 40) {
              formatDistanceResult = locale.formatDistance("halfAMinute", 0, _defaultResult);
            } else if (defaultResult5 < 60) {
              formatDistanceResult = locale.formatDistance("lessThanXMinutes", 1, _defaultResult);
            } else {
              formatDistanceResult = locale.formatDistance("xMinutes", 1, _defaultResult);
            }
            formatDistanceResult1 = formatDistanceResult;
          }
          return formatDistanceResult1;
        }
        if (0 === rounded) {
          formatDistanceResult1 = locale.formatDistance("lessThanXMinutes", 1, _defaultResult);
        } else {
          formatDistanceResult1 = locale.formatDistance("xMinutes", rounded, _defaultResult);
        }
      } else if (rounded < 45) {
        return locale.formatDistance("xMinutes", rounded, _defaultResult);
      } else if (rounded < 90) {
        return locale.formatDistance("aboutXHours", 1, _defaultResult);
      } else if (rounded < c11) {
        const _Math6 = Math;
        return locale.formatDistance("aboutXHours", Math.round(rounded / 60), _defaultResult);
      } else if (rounded < c12) {
        return locale.formatDistance("xDays", 1, _defaultResult);
      } else if (rounded < c13) {
        const _Math5 = Math;
        return locale.formatDistance("xDays", Math.round(rounded / tmp32), _defaultResult);
      } else if (rounded < c14) {
        const _Math4 = Math;
        return locale.formatDistance("aboutXMonths", Math.round(rounded / c13), _defaultResult);
      } else {
        const defaultResult7 = differenceInMonths.default(defaultResult4, defaultResult3);
        if (defaultResult7 < 12) {
          const _Math3 = Math;
          return locale.formatDistance("xMonths", Math.round(rounded / c13), _defaultResult);
        } else {
          let formatDistanceResult2;
          const result = defaultResult7 % 12;
          const _Math2 = Math;
          const rounded1 = Math.floor(defaultResult7 / 12);
          if (result < 3) {
            formatDistanceResult2 = locale.formatDistance("aboutXYears", rounded1, _defaultResult);
          } else if (result < 9) {
            formatDistanceResult2 = locale.formatDistance("overXYears", rounded1, _defaultResult);
          } else {
            formatDistanceResult2 = locale.formatDistance("almostXYears", rounded1 + 1, _defaultResult);
          }
          return formatDistanceResult2;
        }
      }
    }
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError1 = new RangeError("locale must contain formatDistance property");
    throw rangeError1;
  }
};