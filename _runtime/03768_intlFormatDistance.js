// === Module 3768: intlFormatDistance ===

// Module 3768 (intlFormatDistance)
import keys from "keys" /* 3654 */;
import differenceInCalendarDays from "differenceInCalendarDays" /* 3637 */;
import differenceInCalendarMonths from "differenceInCalendarMonths" /* 3661 */;
import differenceInCalendarQuarters from "differenceInCalendarQuarters" /* 3662 */;
import differenceInCalendarWeeks from "differenceInCalendarWeeks" /* 3664 */;
import differenceInCalendarYears from "differenceInCalendarYears" /* 3665 */;
import differenceInHours from "differenceInHours" /* 3667 */;
import differenceInMinutes from "differenceInMinutes" /* 3672 */;
import differenceInSeconds from "differenceInSeconds" /* 3678 */;
import _typeof from "_typeof" /* 3475 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!differenceInCalendarDays) {
  let obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
if (!differenceInCalendarMonths) {
  obj = { default: null };
  obj[0] = differenceInCalendarMonths;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarMonths;
}
differenceInCalendarMonths = tmp5;
if (!differenceInCalendarQuarters) {
  obj = { default: null };
  obj[0] = differenceInCalendarQuarters;
  let tmp7 = obj;
} else {
  tmp7 = differenceInCalendarQuarters;
}
differenceInCalendarQuarters = tmp7;
if (!differenceInCalendarWeeks) {
  const obj1 = { default: null };
  obj1[0] = differenceInCalendarWeeks;
  let tmp9 = obj1;
} else {
  tmp9 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp9;
if (!differenceInCalendarYears) {
  let obj2 = { default: null };
  obj2[0] = differenceInCalendarYears;
  let tmp11 = obj2;
} else {
  tmp11 = differenceInCalendarYears;
}
differenceInCalendarYears = tmp11;
if (!differenceInHours) {
  const obj3 = { default: null };
  obj3[0] = differenceInHours;
  let tmp13 = obj3;
} else {
  tmp13 = differenceInHours;
}
differenceInHours = tmp13;
if (!differenceInMinutes) {
  const obj4 = { default: null };
  obj4[0] = differenceInMinutes;
  let tmp15 = obj4;
} else {
  tmp15 = differenceInMinutes;
}
differenceInMinutes = tmp15;
if (!differenceInSeconds) {
  const obj5 = { default: null };
  obj5[0] = differenceInSeconds;
  let tmp17 = obj5;
} else {
  tmp17 = differenceInSeconds;
}
differenceInSeconds = tmp17;
if (!_typeof) {
  const obj6 = { default: null };
  obj6[0] = _typeof;
  let tmp19 = obj6;
} else {
  tmp19 = _typeof;
}
_typeof = tmp19;
if (!requiredArgs) {
  const obj7 = { default: null };
  obj7[0] = requiredArgs;
  let tmp21 = obj7;
} else {
  tmp21 = requiredArgs;
}
requiredArgs = tmp21;

export default function intlFormatDistance(arg0, arg1, unit) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (null != unit) {
    if (unit.unit) {
      unit = undefined;
      if (null != unit) {
        unit = unit.unit;
      }
      if ("second" === unit) {
        let num2 = differenceInSeconds.default(defaultResult1, defaultResult2);
        let str = unit;
      } else if ("minute" === unit) {
        num2 = differenceInMinutes.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("hour" === unit) {
        num2 = differenceInHours.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("day" === unit) {
        num2 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("week" === unit) {
        num2 = differenceInCalendarWeeks.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("month" === unit) {
        num2 = differenceInCalendarMonths.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("quarter" === unit) {
        num2 = differenceInCalendarQuarters.default(defaultResult1, defaultResult2);
        str = unit;
      } else {
        num2 = 0;
        str = unit;
        if ("year" === unit) {
          num2 = differenceInCalendarYears.default(defaultResult1, defaultResult2);
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
  obj = differenceInSeconds;
  const defaultResult3 = differenceInSeconds.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(defaultResult3);
  if (absolute < keys.secondsInMinute) {
    num2 = obj.default(defaultResult1, defaultResult2);
    str = "second";
  } else {
    const _Math6 = Math;
    const absolute1 = Math.abs(defaultResult3);
    if (absolute1 < tmp6(3654).secondsInHour) {
      num2 = differenceInMinutes.default(defaultResult1, defaultResult2);
      str = "minute";
    } else {
      const _Math7 = Math;
      const absolute2 = Math.abs(defaultResult3);
      if (absolute2 < tmp6(3654).secondsInDay) {
        const _Math = Math;
        if (Math.abs(differenceInCalendarDays.default(defaultResult1, defaultResult2)) < 1) {
          num2 = differenceInHours.default(defaultResult1, defaultResult2);
          str = "hour";
        }
      }
      const _Math2 = Math;
      const absolute3 = Math.abs(defaultResult3);
      if (absolute3 < tmp6(3654).secondsInWeek) {
        num2 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        if (num2) {
          const _Math3 = Math;
          str = "day";
        }
      }
      const _Math4 = Math;
      const absolute4 = Math.abs(defaultResult3);
      if (absolute4 < tmp6(3654).secondsInMonth) {
        num2 = differenceInCalendarWeeks.default(defaultResult1, defaultResult2);
        str = "week";
      } else {
        const _Math8 = Math;
        const absolute5 = Math.abs(defaultResult3);
        if (absolute5 < tmp6(3654).secondsInQuarter) {
          num2 = differenceInCalendarMonths.default(defaultResult1, defaultResult2);
          str = "month";
        } else {
          const _Math5 = Math;
          const absolute6 = Math.abs(defaultResult3);
          if (absolute6 < tmp6(3654).secondsInYear) {
            if (differenceInCalendarQuarters.default(defaultResult1, defaultResult2) < 4) {
              num2 = obj2.default(defaultResult1, defaultResult2);
              str = "quarter";
            }
            obj2 = differenceInCalendarQuarters;
          }
          num2 = differenceInCalendarYears.default(defaultResult1, defaultResult2);
          str = "year";
        }
      }
    }
  }
};
export default exports.default;