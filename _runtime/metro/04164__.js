// === Module 4164: ? ===

// Module 4164
import _mod3918 from "module_3918" /* 3918 */;
import module_4076_mod from "module_4076" /* 4076 */;
import compareAsc_mod from "compareAsc" /* 4089 */;
import _typeof_mod from "module_3913" /* 3913 */;
import cloneObject_mod from "cloneObject" /* 4162 */;
import assign_mod from "assign" /* 4163 */;
import code_mod from "module_4159" /* 4159 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4076 = module_4076_mod;
if (!module_4076) {
  let obj = { default: module_4076 };
  let tmp3 = obj;
} else {
  tmp3 = module_4076;
}
module_4076 = tmp3;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  const obj2 = { default: compareAsc };
  let tmp5 = obj2;
} else {
  tmp5 = compareAsc;
}
compareAsc = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
let cloneObject = cloneObject_mod;
if (!cloneObject) {
  const obj4 = { default: cloneObject };
  let tmp9 = obj4;
} else {
  tmp9 = cloneObject;
}
cloneObject = tmp9;
let assign = assign_mod;
if (!assign) {
  const obj5 = { default: assign };
  let tmp11 = obj5;
} else {
  tmp11 = assign;
}
assign = tmp11;
let code = code_mod;
if (!code) {
  const obj6 = { default: code };
  let tmp13 = obj6;
} else {
  tmp13 = code;
}
code = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj7 = { default: requiredArgs };
  let tmp15 = obj7;
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
  const defaultOptions = _mod3918.getDefaultOptions();
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
      const defaultResult2 = cloneObject.default(locale);
      const result1 = (diff - (module_4076.default(defaultResult5) - module_4076.default(defaultResult4))) / c9;
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
      const defaultResult6 = module_4076.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError3 = new RangeError("locale must contain localize.formatDistance property");
    throw rangeError3;
  }
};
export default exports.default;