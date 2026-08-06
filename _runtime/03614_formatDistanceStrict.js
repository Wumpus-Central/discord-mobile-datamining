// _runtime/03614_formatDistanceStrict.js
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import compareAsc from "compareAsc";
import _typeof from "_typeof";
import cloneObject from "cloneObject";
import assign from "assign";
import code from "code";
import requiredArgs from "requiredArgs";
import { getDefaultOptions } from "03368_getDefaultOptions.js";

if (!getTimezoneOffsetInMilliseconds) {
  let obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = getTimezoneOffsetInMilliseconds;
}
let obj1 = tmp3;
if (!compareAsc) {
  obj = { default: null };
  obj[0] = compareAsc;
  let tmp5 = obj;
} else {
  tmp5 = compareAsc;
}
let c3 = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
let c4 = tmp7;
if (!cloneObject) {
  obj1 = { default: null };
  obj1[0] = cloneObject;
  let tmp9 = obj1;
} else {
  tmp9 = cloneObject;
}
let c5 = tmp9;
if (!assign) {
  const obj2 = { default: null };
  obj2[0] = assign;
  let tmp11 = obj2;
} else {
  tmp11 = assign;
}
let closure_6 = tmp11;
if (!code) {
  const obj3 = { default: null };
  obj3[0] = code;
  let tmp13 = obj3;
} else {
  tmp13 = code;
}
const error = tmp13;
if (!requiredArgs) {
  const obj4 = { default: null };
  obj4[0] = requiredArgs;
  let tmp15 = obj4;
} else {
  tmp15 = requiredArgs;
}
const metroImportAll = tmp15;
let c9 = 60000;
let c10 = 1440;
let c11 = 43200;
let c12 = 525600;

export default function formatDistanceStrict(arg0, arg1, locale) {
  tmp15.default(2, arguments);
  locale = undefined;
  const defaultOptions = getDefaultOptions.getDefaultOptions();
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = tmp13.default;
  }
  if (locale.formatDistance) {
    const defaultResult1 = tmp5.default(arg0, arg1);
    const _isNaN = isNaN;
    if (isNaN(defaultResult1)) {
      const _RangeError4 = RangeError;
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
      const defaultResult3 = tmp11.default(tmp9.default(locale), obj);
      if (defaultResult1 > 0) {
        let defaultResult4 = tmp7.default(arg1);
        let defaultResult5 = tmp7.default(arg0);
      } else {
        defaultResult4 = tmp7.default(arg0);
        defaultResult5 = tmp7.default(arg1);
      }
      let roundingMethod;
      if (null != locale) {
        roundingMethod = locale.roundingMethod;
      }
      let str3 = "round";
      if (null !== roundingMethod) {
        str3 = "round";
        if (undefined !== roundingMethod) {
          str3 = roundingMethod;
        }
      }
      const StringResult = String(str3);
      if ("floor" === StringResult) {
        const _Math3 = Math;
        let round = Math.floor;
      } else if ("ceil" === StringResult) {
        const _Math2 = Math;
        round = Math.ceil;
      } else if ("round" !== StringResult) {
        const _RangeError2 = RangeError;
        const rangeError1 = new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
        throw rangeError1;
      } else {
        const _Math = Math;
        round = Math.round;
      }
      const time = defaultResult5.getTime();
      const diff = time - defaultResult4.getTime();
      const result = diff / c9;
      const defaultResult2 = tmp9.default(locale);
      const result1 = (diff - (tmp3.default(defaultResult5) - tmp3.default(defaultResult4))) / c9;
      let unit;
      if (null != locale) {
        unit = locale.unit;
      }
      if (unit) {
        const _String = String;
        let str7 = String(unit);
      } else {
        str7 = "second";
        if (result >= 1) {
          let str8 = "minute";
          if (result >= 60) {
            let str9 = "hour";
            if (result >= c10) {
              let str10 = "day";
              if (result1 >= c11) {
                let str11 = "year";
                if (result1 < c12) {
                  str11 = "month";
                }
                str10 = str11;
              }
              str9 = str10;
            }
            str8 = str9;
          }
          str7 = str8;
        }
      }
      if ("second" === str7) {
        return locale.formatDistance("xSeconds", round(diff / 1000), defaultResult3);
      } else if ("minute" === str7) {
        return locale.formatDistance("xMinutes", round(result), defaultResult3);
      } else if ("hour" === str7) {
        return locale.formatDistance("xHours", round(result / 60), defaultResult3);
      } else if ("day" === str7) {
        return locale.formatDistance("xDays", round(result1 / c10), defaultResult3);
      } else if ("month" === str7) {
        const roundResult = round(result1 / c11);
        if (12 === roundResult) {
          if ("month" !== unit) {
            let formatDistanceResult = locale.formatDistance("xYears", 1, defaultResult3);
          }
          return formatDistanceResult;
        }
        formatDistanceResult = locale.formatDistance("xMonths", roundResult, defaultResult3);
      } else if ("year" === str7) {
        return locale.formatDistance("xYears", round(result1 / c12), defaultResult3);
      } else {
        const _RangeError3 = RangeError;
        const rangeError2 = new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
        throw rangeError2;
      }
      const defaultResult6 = tmp3.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError3 = new RangeError("locale must contain localize.formatDistance property");
    throw rangeError3;
  }
};
export default exports.default;