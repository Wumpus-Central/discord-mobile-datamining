// === Module 4257: intlFormatDistance ===

// Module 4257 (intlFormatDistance)
import daysInWeek from "daysInWeek" /* 4143 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4126 */;
import differenceInCalendarMonths_mod from "differenceInCalendarMonths" /* 4150 */;
import differenceInCalendarQuarters_mod from "differenceInCalendarQuarters" /* 4151 */;
import differenceInCalendarWeeks_mod from "differenceInCalendarWeeks" /* 4153 */;
import differenceInCalendarYears_mod from "differenceInCalendarYears" /* 4154 */;
import differenceInHours_mod from "differenceInHours" /* 4156 */;
import differenceInMinutes_mod from "differenceInMinutes" /* 4161 */;
import differenceInSeconds_mod from "differenceInSeconds" /* 4167 */;
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp19;
let tmp21;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  tmp3 = { default: differenceInCalendarDays };
  const obj = { default: differenceInCalendarDays };
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
let differenceInCalendarMonths = differenceInCalendarMonths_mod;
if (!differenceInCalendarMonths) {
  tmp5 = { default: differenceInCalendarMonths };
  const obj2 = { default: differenceInCalendarMonths };
} else {
  tmp5 = differenceInCalendarMonths;
}
differenceInCalendarMonths = tmp5;
let differenceInCalendarQuarters = differenceInCalendarQuarters_mod;
if (!differenceInCalendarQuarters) {
  let obj3 = { default: differenceInCalendarQuarters };
  tmp7 = obj3;
} else {
  tmp7 = differenceInCalendarQuarters;
}
differenceInCalendarQuarters = tmp7;
let differenceInCalendarWeeks = differenceInCalendarWeeks_mod;
if (!differenceInCalendarWeeks) {
  tmp9 = { default: differenceInCalendarWeeks };
  const obj4 = { default: differenceInCalendarWeeks };
} else {
  tmp9 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp9;
let differenceInCalendarYears = differenceInCalendarYears_mod;
if (!differenceInCalendarYears) {
  tmp11 = { default: differenceInCalendarYears };
  const obj5 = { default: differenceInCalendarYears };
} else {
  tmp11 = differenceInCalendarYears;
}
differenceInCalendarYears = tmp11;
let differenceInHours = differenceInHours_mod;
if (!differenceInHours) {
  tmp13 = { default: differenceInHours };
  const obj6 = { default: differenceInHours };
} else {
  tmp13 = differenceInHours;
}
differenceInHours = tmp13;
let differenceInMinutes = differenceInMinutes_mod;
if (!differenceInMinutes) {
  tmp15 = { default: differenceInMinutes };
  const obj7 = { default: differenceInMinutes };
} else {
  tmp15 = differenceInMinutes;
}
differenceInMinutes = tmp15;
let differenceInSeconds = differenceInSeconds_mod;
if (!differenceInSeconds) {
  tmp17 = { default: differenceInSeconds };
  const obj8 = { default: differenceInSeconds };
} else {
  tmp17 = differenceInSeconds;
}
differenceInSeconds = tmp17;
let toDate = toDate_mod;
if (!toDate) {
  tmp19 = { default: toDate };
  const obj9 = { default: toDate };
} else {
  tmp19 = toDate;
}
toDate = tmp19;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp21 = { default: requiredArgs };
  const obj10 = { default: requiredArgs };
} else {
  tmp21 = requiredArgs;
}
requiredArgs = tmp21;

export default function intlFormatDistance(arg0, arg1, unit) {
  let num2;
  let str;
  let str6;
  let style;
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  if (null != unit) {
    if (unit.unit) {
      unit = undefined;
      if (null != unit) {
        unit = unit.unit;
      }
      if ("second" === unit) {
        num2 = differenceInSeconds.default(defaultResult1, defaultResult2);
        str = unit;
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
    const obj3 = { localeMatcher, numeric: str6, style };
    str6 = undefined;
    if (null != unit) {
      str6 = unit.numeric;
    }
    if (!str6) {
      str6 = "auto";
    }
    style = undefined;
    if (null != unit) {
      style = unit.style;
    }
    const self = this;
    const self2 = this;
    const relativeTimeFormat = new RelativeTimeFormat(locale, obj3);
    return relativeTimeFormat.format(num2, str);
  }
  const defaultResult3 = differenceInSeconds.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(defaultResult3);
  if (absolute < daysInWeek.secondsInMinute) {
    num2 = differenceInSeconds.default(defaultResult1, defaultResult2);
    str = "second";
  } else {
    const _Math6 = Math;
    const absolute1 = Math.abs(defaultResult3);
    if (absolute1 < daysInWeek.secondsInHour) {
      num2 = differenceInMinutes.default(defaultResult1, defaultResult2);
      str = "minute";
    } else {
      const _Math7 = Math;
      const absolute2 = Math.abs(defaultResult3);
      if (absolute2 < daysInWeek.secondsInDay) {
        const _Math = Math;
        if (Math.abs(differenceInCalendarDays.default(defaultResult1, defaultResult2)) < 1) {
          num2 = differenceInHours.default(defaultResult1, defaultResult2);
          str = "hour";
        }
      }
      const _Math2 = Math;
      const absolute3 = Math.abs(defaultResult3);
      if (absolute3 < daysInWeek.secondsInWeek) {
        num2 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        if (num2) {
          const _Math3 = Math;
          str = "day";
        }
      }
      const _Math4 = Math;
      const absolute4 = Math.abs(defaultResult3);
      if (absolute4 < daysInWeek.secondsInMonth) {
        num2 = differenceInCalendarWeeks.default(defaultResult1, defaultResult2);
        str = "week";
      } else {
        const _Math8 = Math;
        const absolute5 = Math.abs(defaultResult3);
        if (absolute5 < daysInWeek.secondsInQuarter) {
          num2 = differenceInCalendarMonths.default(defaultResult1, defaultResult2);
          str = "month";
        } else {
          const _Math5 = Math;
          const absolute6 = Math.abs(defaultResult3);
          if (absolute6 < daysInWeek.secondsInYear) {
            if (differenceInCalendarQuarters.default(defaultResult1, defaultResult2) < 4) {
              num2 = differenceInCalendarQuarters.default(defaultResult1, defaultResult2);
              str = "quarter";
            }
          }
          num2 = differenceInCalendarYears.default(defaultResult1, defaultResult2);
          str = "year";
        }
      }
    }
  }
};