// _runtime/04215_formatDistanceStrict.js
import _mod3969 from "metro/03969__.js";
import getTimezoneOffsetInMilliseconds_mod from "04127_getTimezoneOffsetInMilliseconds.js";
import compareAsc_mod from "04140_compareAsc.js";
import toDate_mod from "03964_toDate.js";
import cloneObject_mod from "04213_cloneObject.js";
import assign_mod from "04214_assign.js";
import code_mod from "metro/04210__.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp11;
let tmp13;
let tmp15;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds_mod;
if (!getTimezoneOffsetInMilliseconds) {
  let obj = { default: getTimezoneOffsetInMilliseconds };
  tmp3 = obj;
} else {
  tmp3 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp3;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  tmp5 = { default: compareAsc };
  const obj2 = { default: compareAsc };
} else {
  tmp5 = compareAsc;
}
compareAsc = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let cloneObject = cloneObject_mod;
if (!cloneObject) {
  tmp9 = { default: cloneObject };
  const obj4 = { default: cloneObject };
} else {
  tmp9 = cloneObject;
}
cloneObject = tmp9;
let assign = assign_mod;
if (!assign) {
  tmp11 = { default: assign };
  const obj5 = { default: assign };
} else {
  tmp11 = assign;
}
assign = tmp11;
let code = code_mod;
if (!code) {
  tmp13 = { default: code };
  const obj6 = { default: code };
} else {
  tmp13 = code;
}
code = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp15 = { default: requiredArgs };
  const obj7 = { default: requiredArgs };
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let c9 = 60000;
let c10 = 1440;
let c11 = 43200;
let c12 = 525600;

export default function formatDistanceStrict(arg0, arg1, locale) {
  requiredArgs.default(2, arguments);
  locale = undefined;
  const defaultOptions = _mod3969.getDefaultOptions();
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
      const _RangeError4 = RangeError;
      const self7 = this;
      const self8 = this;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    } else {
      let defaultResult3;
      let defaultResult4;
      let round;
      let str7;
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
      let roundingMethod;
      const _String = String;
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
      const _StringResult = _String(str3);
      if ("floor" === _StringResult) {
        const _Math3 = Math;
        round = Math.floor;
      } else if ("ceil" === _StringResult) {
        const _Math2 = Math;
        round = Math.ceil;
      } else if ("round" !== _StringResult) {
        const _RangeError2 = RangeError;
        const self3 = this;
        const self4 = this;
        const rangeError1 = new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
        throw rangeError1;
      } else {
        const _Math = Math;
        round = Math.round;
      }
      const time = defaultResult4.getTime();
      const diff = time - defaultResult3.getTime();
      const result = diff / c9;
      const defaultResult5 = getTimezoneOffsetInMilliseconds.default(defaultResult4);
      const result1 = (diff - (defaultResult5 - getTimezoneOffsetInMilliseconds.default(defaultResult3))) / c9;
      let unit;
      if (null != locale) {
        unit = locale.unit;
      }
      if (unit) {
        const _String2 = String;
        str7 = String(unit);
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
        return locale.formatDistance("xSeconds", round(diff / 1000), _defaultResult);
      } else if ("minute" === str7) {
        return locale.formatDistance("xMinutes", round(result), _defaultResult);
      } else if ("hour" === str7) {
        return locale.formatDistance("xHours", round(result / 60), _defaultResult);
      } else if ("day" === str7) {
        return locale.formatDistance("xDays", round(result1 / c10), _defaultResult);
      } else if ("month" === str7) {
        const roundResult = round(result1 / c11);
        if (12 === roundResult) {
          let formatDistanceResult;
          if ("month" !== unit) {
            formatDistanceResult = locale.formatDistance("xYears", 1, _defaultResult);
          }
          return formatDistanceResult;
        }
        formatDistanceResult = locale.formatDistance("xMonths", roundResult, _defaultResult);
      } else if ("year" === str7) {
        return locale.formatDistance("xYears", round(result1 / c12), _defaultResult);
      } else {
        const _RangeError3 = RangeError;
        const self5 = this;
        const self6 = this;
        const rangeError2 = new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
        throw rangeError2;
      }
    }
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError3 = new RangeError("locale must contain localize.formatDistance property");
    throw rangeError3;
  }
}
