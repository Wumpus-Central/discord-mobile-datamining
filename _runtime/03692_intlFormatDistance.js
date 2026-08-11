// _runtime/03692_intlFormatDistance.js
import differenceInCalendarDays from "differenceInCalendarDays";
import differenceInCalendarMonths from "differenceInCalendarMonths";
import differenceInCalendarQuarters from "differenceInCalendarQuarters";
import differenceInCalendarWeeks from "differenceInCalendarWeeks";
import differenceInCalendarYears from "differenceInCalendarYears";
import differenceInHours from "differenceInHours";
import differenceInMinutes from "differenceInMinutes";
import differenceInSeconds from "differenceInSeconds";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import { keys } from "03578_keys.js";

if (!differenceInCalendarDays) {
  let obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
let obj1 = tmp3;
if (!differenceInCalendarMonths) {
  obj = { default: null };
  obj[0] = differenceInCalendarMonths;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarMonths;
}
let c3 = tmp5;
if (!differenceInCalendarQuarters) {
  obj = { default: null };
  obj[0] = differenceInCalendarQuarters;
  let tmp7 = obj;
} else {
  tmp7 = differenceInCalendarQuarters;
}
let c4 = tmp7;
if (!differenceInCalendarWeeks) {
  obj1 = { default: null };
  obj1[0] = differenceInCalendarWeeks;
  let tmp9 = obj1;
} else {
  tmp9 = differenceInCalendarWeeks;
}
let c5 = tmp9;
if (!differenceInCalendarYears) {
  let obj2 = { default: null };
  obj2[0] = differenceInCalendarYears;
  let tmp11 = obj2;
} else {
  tmp11 = differenceInCalendarYears;
}
let closure_6 = tmp11;
if (!differenceInHours) {
  const obj3 = { default: null };
  obj3[0] = differenceInHours;
  let tmp13 = obj3;
} else {
  tmp13 = differenceInHours;
}
const error = tmp13;
if (!differenceInMinutes) {
  const obj4 = { default: null };
  obj4[0] = differenceInMinutes;
  let tmp15 = obj4;
} else {
  tmp15 = differenceInMinutes;
}
const metroImportAll = tmp15;
if (!differenceInSeconds) {
  const obj5 = { default: null };
  obj5[0] = differenceInSeconds;
  let tmp17 = obj5;
} else {
  tmp17 = differenceInSeconds;
}
let c9 = tmp17;
if (!_typeof) {
  const obj6 = { default: null };
  obj6[0] = _typeof;
  let tmp19 = obj6;
} else {
  tmp19 = _typeof;
}
let c10 = tmp19;
if (!requiredArgs) {
  const obj7 = { default: null };
  obj7[0] = requiredArgs;
  let tmp21 = obj7;
} else {
  tmp21 = requiredArgs;
}
const unpackModuleId = tmp21;

export default function intlFormatDistance(arg0, arg1, unit) {
  tmp21.default(2, arguments);
  const defaultResult1 = tmp19.default(arg0);
  const defaultResult2 = tmp19.default(arg1);
  if (null != unit) {
    if (unit.unit) {
      unit = undefined;
      if (null != unit) {
        unit = unit.unit;
      }
      if ("second" === unit) {
        let num2 = tmp17.default(defaultResult1, defaultResult2);
        let str = unit;
      } else if ("minute" === unit) {
        num2 = tmp15.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("hour" === unit) {
        num2 = tmp13.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("day" === unit) {
        num2 = tmp3.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("week" === unit) {
        num2 = tmp9.default(defaultResult1, defaultResult2);
        str = unit;
        tmp21 = tmp9;
      } else if ("month" === unit) {
        num2 = tmp5.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("quarter" === unit) {
        num2 = tmp7.default(defaultResult1, defaultResult2);
        str = unit;
      } else {
        num2 = 0;
        str = unit;
        if ("year" === unit) {
          num2 = tmp11.default(defaultResult1, defaultResult2);
          str = unit;
        }
      }
    }
    const _Intl = Intl;
    let locale;
    if (null != unit) {
      locale = unit.locale;
    }
    let localeMatcher;
    if (null != unit) {
      localeMatcher = unit.localeMatcher;
    }
    let obj = { localeMatcher: null, numeric: null, style: null };
    obj[0] = localeMatcher;
    let str6;
    if (null != unit) {
      str6 = unit.numeric;
    }
    if (!str6) {
      str6 = "auto";
    }
    obj[1] = str6;
    let style;
    if (null != unit) {
      style = unit.style;
    }
    obj[2] = style;
    const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, obj);
    return relativeTimeFormat.format(num2, str);
  }
  obj = tmp17;
  const defaultResult3 = tmp17.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(defaultResult3);
  if (absolute < keys.secondsInMinute) {
    num2 = obj.default(defaultResult1, defaultResult2);
    str = "second";
  } else {
    const _Math6 = Math;
    const absolute1 = Math.abs(defaultResult3);
    if (absolute1 < tmp6(3578).secondsInHour) {
      num2 = tmp15.default(defaultResult1, defaultResult2);
      str = "minute";
    } else {
      const _Math7 = Math;
      const absolute2 = Math.abs(defaultResult3);
      if (absolute2 < tmp6(3578).secondsInDay) {
        const _Math = Math;
        if (Math.abs(tmp3.default(defaultResult1, defaultResult2)) < 1) {
          num2 = tmp13.default(defaultResult1, defaultResult2);
          str = "hour";
        }
      }
      const _Math2 = Math;
      const absolute3 = Math.abs(defaultResult3);
      if (absolute3 < tmp6(3578).secondsInWeek) {
        num2 = tmp3.default(defaultResult1, defaultResult2);
        if (num2) {
          const _Math3 = Math;
          str = "day";
        }
      }
      const _Math4 = Math;
      const absolute4 = Math.abs(defaultResult3);
      if (absolute4 < tmp6(3578).secondsInMonth) {
        num2 = tmp9.default(defaultResult1, defaultResult2);
        str = "week";
      } else {
        const _Math8 = Math;
        const absolute5 = Math.abs(defaultResult3);
        if (absolute5 < tmp6(3578).secondsInQuarter) {
          num2 = tmp5.default(defaultResult1, defaultResult2);
          str = "month";
        } else {
          const _Math5 = Math;
          const absolute6 = Math.abs(defaultResult3);
          if (absolute6 < tmp6(3578).secondsInYear) {
            if (tmp7.default(defaultResult1, defaultResult2) < 4) {
              num2 = obj2.default(defaultResult1, defaultResult2);
              str = "quarter";
            }
            obj2 = tmp7;
          }
          num2 = tmp11.default(defaultResult1, defaultResult2);
          str = "year";
        }
      }
    }
  }
};
export default exports.default;