// _runtime/03612_formatDistance.js
import compareAsc from "compareAsc";
import differenceInMonths from "differenceInMonths";
import differenceInSeconds from "differenceInSeconds";
import code from "code";
import _typeof from "_typeof";
import cloneObject from "cloneObject";
import assign from "assign";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import requiredArgs from "requiredArgs";
import { getDefaultOptions } from "03369_getDefaultOptions.js";

if (!compareAsc) {
  let obj = { default: null };
  obj[0] = compareAsc;
  let tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
let obj1 = tmp3;
if (!differenceInMonths) {
  obj = { default: null };
  obj[0] = differenceInMonths;
  let tmp5 = obj;
} else {
  tmp5 = differenceInMonths;
}
let c3 = tmp5;
if (!differenceInSeconds) {
  obj = { default: null };
  obj[0] = differenceInSeconds;
  let tmp7 = obj;
} else {
  tmp7 = differenceInSeconds;
}
let c4 = tmp7;
if (!code) {
  obj1 = { default: null };
  obj1[0] = code;
  let tmp9 = obj1;
} else {
  tmp9 = code;
}
let c5 = tmp9;
if (!_typeof) {
  const obj2 = { default: null };
  obj2[0] = _typeof;
  let tmp11 = obj2;
} else {
  tmp11 = _typeof;
}
let closure_6 = tmp11;
if (!cloneObject) {
  const obj3 = { default: null };
  obj3[0] = cloneObject;
  let tmp13 = obj3;
} else {
  tmp13 = cloneObject;
}
const error = tmp13;
if (!assign) {
  const obj4 = { default: null };
  obj4[0] = assign;
  let tmp15 = obj4;
} else {
  tmp15 = assign;
}
const metroImportAll = tmp15;
if (!getTimezoneOffsetInMilliseconds) {
  const obj5 = { default: null };
  obj5[0] = getTimezoneOffsetInMilliseconds;
  let tmp17 = obj5;
} else {
  tmp17 = getTimezoneOffsetInMilliseconds;
}
let c9 = tmp17;
if (!requiredArgs) {
  const obj6 = { default: null };
  obj6[0] = requiredArgs;
  let tmp19 = obj6;
} else {
  tmp19 = requiredArgs;
}
let c10 = tmp19;
let c11 = 1440;
let c12 = 2520;
let c13 = 43200;
let c14 = 86400;

export default function formatDistance(arg0, arg1, locale) {
  tmp19.default(2, arguments);
  locale = undefined;
  const defaultOptions = getDefaultOptions.getDefaultOptions();
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = tmp9.default;
  }
  if (locale.formatDistance) {
    const defaultResult1 = tmp3.default(arg0, arg1);
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
      const obj = { addSuffix: null, comparison: null };
      obj[0] = Boolean(addSuffix);
      obj[1] = defaultResult1;
      const defaultResult3 = tmp15.default(tmp15.default(locale), obj);
      if (defaultResult1 > 0) {
        let defaultResult4 = tmp11.default(arg1);
        let defaultResult5 = tmp11.default(arg0);
      } else {
        defaultResult4 = tmp11.default(arg0);
        defaultResult5 = tmp11.default(arg1);
      }
      const defaultResult6 = tmp7.default(defaultResult5, defaultResult4);
      const defaultResult2 = tmp15.default(locale);
      const _Math = Math;
      const rounded = Math.round((defaultResult6 - (tmp17.default(defaultResult5) - tmp17.default(defaultResult4)) / 1000) / 60);
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
        const defaultResult8 = tmp5.default(defaultResult5, defaultResult4);
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
      const defaultResult7 = tmp17.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("locale must contain formatDistance property");
    throw rangeError1;
  }
};
export default exports.default;